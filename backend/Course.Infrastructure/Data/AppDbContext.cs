using Microsoft.EntityFrameworkCore;
using Course.Domain.Entities;

namespace Course.Infrastructure.Data
{
    public class AppDbContext : DbContext 
    {

        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
                
        }

        public DbSet<User> Users { get; set; }
    }
}
