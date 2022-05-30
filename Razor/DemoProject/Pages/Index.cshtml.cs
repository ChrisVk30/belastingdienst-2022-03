using DemoProject.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DemoProject.Pages
{
	// code-behind
	public class IndexModel : PageModel
	{
		public static List<TelevisionEntity> Televisions { get; set; } = new()
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

		[BindProperty]
		public TelevisionEntity NewTelevision { get; set; } // model binding


		public void OnGet()
		{
		}

		public void OnPost()
		{
			Thread.Sleep(3000);
			if (!ModelState.IsValid)
			{
				return;
			}
			NewTelevision.Id = Televisions.Max(x => x.Id) + 1;
			Console.WriteLine($"Nieuwe tv: {NewTelevision.Brand} is {NewTelevision.Size}\" groot");
			Televisions.Add(NewTelevision);
		}
	}
}
