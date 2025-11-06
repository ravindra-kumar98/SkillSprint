using Course.Application.DTOs;
using Course.Application.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Course.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        public AuthController(AuthService authService)
        {
            this._authService = authService;   
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {

            var user= await _authService.LoginAsync(loginRequest);
            if (user == null) {
                return BadRequest(new ApiResponse<string> {

                    Success= false,
                    Message="Invalid credential!!",
                    StatusCode=401
                
                });
            
            
            }

            return Ok(new ApiResponse<AuthResponse> { 
            
                Success = true,
                Message="login sucessful",
                StatusCode = 200,              
                Data=user
            });
           
        }
        [HttpPost("Signup")]
        public async Task<IActionResult> Register(RegisterRequest registerRequest)
        {
            var response = await _authService.RegisterAsync(registerRequest);

            if (!response)
            {
                return BadRequest(new ApiResponse<string> { 
                   Success=false,   
                   StatusCode=500,
                   Message="Registration Failed"
                });
            }

            return Ok(new ApiResponse<string> { 
             Success=true,
             StatusCode=201,
             Message="Registration Sucessful"
            });
        }
    }
}
