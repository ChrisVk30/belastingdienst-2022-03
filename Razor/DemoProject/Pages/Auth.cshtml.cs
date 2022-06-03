using DemoProject.Entities;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Pages
{
    public class AuthModel : PageModel
    {
        public string Status { get; set; }

        private UserManager<MediaUser> _userManager;
        private SignInManager<MediaUser> _signInManager;

        public AuthModel(UserManager<MediaUser> userManager, SignInManager<MediaUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task OnGetAsync()
        {
            if (RouteData.Values["action"].ToString() == "register")
            {
                await Register();
            }
            else if (RouteData.Values["action"].ToString() == "login")
            {
                await LogIn();
            }
            else if (RouteData.Values["action"].ToString() == "logout")
            {
                await LogOut();
            }
        }

        public async Task Register()
        {
            var result = await _userManager.CreateAsync(new MediaUser
            {
                UserName = "JP",
                Email = "jp@jp.nl",
                FavoriteMerk = "Samsung",
                FavoriteSize = 65M
            }, "Top$ecret123 WORK NOW DAMNIT");
            if(result.Succeeded)
            {
                Status = "Geregistreerd!";
            }
            else
            {
                Status = string.Join(", ", result.Errors.Select(x => x.Description));
            }
        }

        public async Task LogIn()
        {
            var result = await _signInManager.PasswordSignInAsync("JP", "Top$ecret123 WORK NOW DAMNIT", false, false);

            if (result.Succeeded)
            {
                Status = "Ingelogd!";
            }
            else
            {
                Status = $"Kon niet inloggen: {result.RequiresTwoFactor} | {result.IsLockedOut} | {result.IsNotAllowed}";
            }
        }

        public async Task LogOut()
        {
            await _signInManager.SignOutAsync();
            Status = "Uitgelogd!";
        }


    }
}
