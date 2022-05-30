using DemoProject.Entities;
using DemoProject.Repositories;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DemoProject.Pages
{
	// code-behind
	public class IndexModel : PageModel
	{
		public ITelevisionRepository TelevisionRepository { get; set; }

        public IEnumerable<TelevisionEntity> Televisions { get; set; }

        [BindProperty]
		public TelevisionEntity NewTelevision { get; set; } // model binding

        public IndexModel(ITelevisionRepository televisionRepository)
        {
			TelevisionRepository = televisionRepository;
		}


		public async Task OnGetAsync()
		{
			Televisions = await TelevisionRepository.GetAll();
		}

		public async Task OnPostAsync()
		{
			Televisions = await TelevisionRepository.GetAll();

			Thread.Sleep(3000);
			if (!ModelState.IsValid)
			{
				return;
			}

			await TelevisionRepository.Add(NewTelevision);
			Console.WriteLine($"Nieuwe tv: {NewTelevision.Brand} is {NewTelevision.Size}\" groot");
			//Televisions.Add(NewTelevision);
		}
	}
}
