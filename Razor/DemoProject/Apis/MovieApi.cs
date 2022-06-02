using DemoProject.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Apis
{
	[Route("api/movie")]
	public class MovieApi : ControllerBase
	{
		[HttpGet]
		public List<MovieEntity> GetAll()
		{
			var shawshank = new MovieEntity { Title = "The Shawshank Redemption" };
			var matrix = new MovieEntity { Title = "The Matrix" };
			var se7en = new MovieEntity { Title = "Se7en" };

			var morgan = new ActorEntity { Name = "Morgan Freeman" };
			var keanu = new ActorEntity { Name = "Keanu Reeves" };
			var brad = new ActorEntity { Name = "Brad Pitt" };

			shawshank.Actors.Add(morgan);
			matrix.Actors.Add(keanu);
			se7en.Actors.Add(brad);
			se7en.Actors.Add(morgan);

			morgan.Movies.Add(shawshank);
			morgan.Movies.Add(se7en);
			keanu.Movies.Add(matrix);
			brad.Movies.Add(se7en);

			return new() { shawshank, matrix, se7en };
		}
	}
}
