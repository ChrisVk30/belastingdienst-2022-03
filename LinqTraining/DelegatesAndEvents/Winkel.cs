using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesAndEvents
{
	public class Winkel
	{
		public List<Product> Products { get; set; } = new List<Product>
		{
			new Product { Id = 4, Description = "Muis", Price = 110M },
			new Product { Id = 8, Description = "Laptop", Price = 1650.99M },
			new Product { Id = 15, Description = "Papieren beker", Price = 0.05M },
			new Product { Id = 16, Description = "Theezakje", Price = 0.04M },
			new Product { Id = 16, Description = "Schrijfmap", Price = 11.90M },
			new Product { Id = 16, Description = "Haargel", Price = 1.10M },
			new Product { Id = 16, Description = "Stift", Price = 1.29M },
			new Product { Id = 16, Description = "Afstandsbediening", Price = 54M },
			new Product { Id = 16, Description = "Bureaustoel", Price = 945M }
		};


		//public void FilterProducts(Predicate<Product> filter, string typeOrProduct)
		//{
		//	foreach (var product in Products)
		//	{
		//		if (filter.Invoke(product))
		//		{
		//			Console.WriteLine($"{typeOrProduct} product: {product.Description} kost EUR {product.Price}");
		//		}
		//	}
		//}

		// 

		public void FilterProducts(Predicate<Product> filter, Action<Product> writer)
		{
			foreach (var product in Products)
			{
				if (filter.Invoke(product))
				{
					writer.Invoke(product);
				}
			}
		}

		public void GetExpensiveProducts()
		{
			foreach (var product in Products)
			{
				if (product.Price > 400M)
				{
					Console.WriteLine($"Duur product: {product.Description} kost EUR {product.Price}");
				}
			}
		}

		public void GetCheapProducts()
		{
			foreach (var product in Products)
			{
				if (product.Price < 5M)
				{
					Console.WriteLine($"Goedkoop product: {product.Description} kost EUR {product.Price}");
				}
			}
		}

		public void GetProductsStartingWithS()
		{
			foreach (var product in Products)
			{
				if (product.Description.StartsWith("S"))
				{
					Console.WriteLine($"Poduct met S: {product.Description} kost EUR {product.Price}");
				}
			}
		}
	}
}
