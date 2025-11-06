using Course.Domain.Entities;

namespace Course.Application.Interfaces
{
    public interface IUserRepository
    {
        Task<User?> GetEmailAsync(string email);

        Task AddUserAsync(User user);

    }
}
