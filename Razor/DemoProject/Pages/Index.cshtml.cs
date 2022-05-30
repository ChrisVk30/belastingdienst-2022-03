using DemoProject.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DemoProject.Pages
{
    // code-behind
    public class IndexModel : PageModel
    {
        public List<TelevisionEntity> tvs = new()
		{
            new TelevisionEntity()
			{
                Id = 4,
                Brand = "Samsung",
                Size = 65M,
                Price = 1600M
            },
            new TelevisionEntity()
            {
                Id = 8,
                Brand = "LG",
                Size = 79M,
                Price = 3600M
            },
            new TelevisionEntity()
            {
                Id = 16,
                Brand = "Philips",
                Size = 42M,
                Price = 380M
            }
        };

        public void OnGet()
        {
        }
    }
}
