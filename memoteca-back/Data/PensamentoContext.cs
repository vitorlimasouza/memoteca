using Microsoft.EntityFrameworkCore;
using Memoteca.Models;

namespace Memoteca.Data;

public class MemotecaContext : DbContext
{
    public MemotecaContext(DbContextOptions<MemotecaContext> options) 
        : base(options)
    {

    }

    public DbSet<Pensamento> Pensamentos { get; set; }
}
