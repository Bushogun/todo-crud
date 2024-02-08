using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class TodoContext : DbContext
    {
        public IConfiguration _config { get; set; }

        public TodoContext(IConfiguration config)
        {
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("Conexion"));
        }
        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
