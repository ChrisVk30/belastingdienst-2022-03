using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Entities
{
	// FluentValidations are an interesting alternative

	public class TelevisionEntity
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Vul dit in aub")]
		[RegularExpression("^[a-zA-Z0-9]+$", ErrorMessage = "Alleen letters en cijfers graag")]
		public string Brand { get; set; }

		[Required]
		public decimal Price { get; set; }
		
		[Required]
		public decimal Size { get; set; }
	}
}
