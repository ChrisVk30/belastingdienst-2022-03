using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Entities
{
    public class MediaUser : IdentityUser
    {
        public string FavoriteMerk { get; set; }

        public decimal FavoriteSize { get; set; }
    }
}
