using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;

namespace WebApiUserRegistration.Models
{
    public class ApplicationUser:IdentityUser
    {
        public String FirstName { get; set; }

        public string LastName { get; set; }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext() 
            :base("DefaultConnection",throwIfV1Schema:false)
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //Asp.net user -> User
            modelBuilder.Entity<ApplicationUser>()
                .ToTable("User");
            //Asp.net role -> Role
            modelBuilder.Entity<IdentityRole>()
                 .ToTable("Role");
            //AspNetUserRoles -> UserRole
            modelBuilder.Entity<IdentityUserRole>()
                .ToTable("UserRole");
            //AspNetUserClaim -> UserClaim
            modelBuilder.Entity<IdentityUserClaim>()
                .ToTable("UserClaim");
            //AspNetUserLogin -> UserLogin
            modelBuilder.Entity<IdentityUserLogin>()
               .ToTable("UserLogin");

        }
    }
}