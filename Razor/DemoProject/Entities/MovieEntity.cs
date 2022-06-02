using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Entities
{
	public class MovieEntity
	{
		public string Title { get; set; }

		public List<ActorEntity> Actors { get; set; } = new();
	}
}
