using System;
using CSharp_21_EntityFrameworkCore.Entities;
using Microsoft.EntityFrameworkCore;

namespace CSharp_21_EntityFrameworkCore
{
    public class DatabaseContext : DbContext
    {        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = (localdb)\\mssqllocaldb; Database = EFCore; Trusted_Connection = True;");
        }

        public DbSet<School> Schools { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Class> Classes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<School>();

            modelBuilder.Entity<Student>()
                .HasOne(p => p.School)
                .WithMany(g => g.Students)
                .HasForeignKey(p => p.SchoolId);

            modelBuilder.Entity<Class>()
                .HasMany(w => w.Students).WithOne(g => g.Class);

        }

    }
}
