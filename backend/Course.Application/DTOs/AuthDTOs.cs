using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Course.Application.DTOs
{
    // DTO used when a user signs up
    public class RegisterRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    // DTO used when a user logs in
    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    // DTO returned after successful login/signup
    public class AuthResponse
    {
        public string Token { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }

    // for APIRESPONSE 
    public class ApiResponse<T>
    {
        public bool Success { get; set; }         // true or false
        public string Message { get; set; } = ""; // success/failure message
        public int StatusCode { get; set; }       // e.g., 200, 400, 401, etc.
        public T? Data { get; set; }              // generic payload (could be user, token, etc.)
        
    }
}
