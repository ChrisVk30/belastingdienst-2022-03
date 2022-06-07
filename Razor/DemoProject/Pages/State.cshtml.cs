using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Pages
{
    public class StateModel : PageModel
    {
        public string Text { get; set; } = "<strong>hallo</strong> <script>alert('q');</script>";

        [Authorize]
        public void OnGet()
        {

        }

        public void OnPut()
        {

        }
    }
}
