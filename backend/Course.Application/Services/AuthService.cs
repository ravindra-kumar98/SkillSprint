using Course.Application.DTOs;
using Course.Application.Interfaces;
using Course.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Course.Application.Services
{
    public class AuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _config;
        private readonly PasswordHasher<User> _hasher = new();

        public AuthService(IUserRepository userRepository, IConfiguration config)
        {
            this._userRepository = userRepository;
            this._config = config;
        }

        public async Task<bool> RegisterAsync(RegisterRequest registerRequest)
        {
            var existinguser = await _userRepository.GetEmailAsync(registerRequest.Email);
            if (existinguser != null)
            {
               return false!;
            }

            var user = new User
            {
                Name = registerRequest.Name,
                Email = registerRequest.Email,
                PasswordHash= _hasher.HashPassword(null!, registerRequest.Password)
            };
            await _userRepository.AddUserAsync(user);
            return true;


        }

        public async Task<AuthResponse?> LoginAsync(LoginRequest loginRequest) {
            var user = await _userRepository.GetEmailAsync(loginRequest.Email);
            if (user == null) return null;

            var result =  _hasher.VerifyHashedPassword(user,user.PasswordHash,loginRequest.Password);
            if(result== PasswordVerificationResult.Failed) return null;

            return  GenerateJwt(user);
        }

        private AuthResponse GenerateJwt(User user) {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]));
            var creds = new SigningCredentials(key ,SecurityAlgorithms.HmacSha256);

            var claim = new[]
            {
                new Claim(ClaimTypes.Name,user.Name),
                new Claim(ClaimTypes.Email,user.Email)
            };

            var token =new JwtSecurityToken(
               
                claims: claim,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds
                );

            var tokenstring= new JwtSecurityTokenHandler().WriteToken(token);

            return new AuthResponse
            {
                Token = tokenstring,
                Email = user.Email,
                Name = user.Name
            };

        }
    }
}
