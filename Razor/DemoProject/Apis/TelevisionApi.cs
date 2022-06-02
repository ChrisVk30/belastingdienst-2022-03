using DemoProject.Entities;
using DemoProject.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Apis
{
	[Route("api/television")]
	[ApiController] // ModelState validatie
	public class TelevisionApi : ControllerBase
	{
		private ITelevisionRepository _televisionRepository;
		public TelevisionApi(ITelevisionRepository televisionRepository)
		{
			_televisionRepository = televisionRepository;
		}


		[HttpGet]
		public async Task<IEnumerable<TelevisionEntity>> GetAll()
		{
			return await _televisionRepository.GetAll();
		}

		[HttpPost]
		public async Task<TelevisionEntity> Add(TelevisionEntity newTelevision) // model binding
		{
			await _televisionRepository.Add(newTelevision);
			return newTelevision;
		}
	}
}
