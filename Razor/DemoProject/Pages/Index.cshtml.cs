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
			if (!ModelState.IsValid)
			{
				Televisions = await TelevisionRepository.GetAll();
				return;
			}

			await TelevisionRepository.Add(NewTelevision);
			Televisions = await TelevisionRepository.GetAll();

			Console.WriteLine($"Nieuwe tv: {NewTelevision.Brand} is {NewTelevision.Size}\" groot");
		}
	}
}
