using DemoProject.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.DataAccess
{
    public class MediaContext : IdentityDbContext<MediaUser>
    {
        public DbSet<TelevisionEntity> Televisions { get; set; }

        public MediaContext(DbContextOptions options) : base(options)
        {

        }
    }
}
