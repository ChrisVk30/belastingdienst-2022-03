using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Entities
{
	public class ActorEntity
	{
		public string Name { get; set; }

		public List<MovieEntity> Movies { get; set; } = new();
	}
}
