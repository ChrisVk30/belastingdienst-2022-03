// See https://aka.ms/new-console-template for more information
using DelegatesAndEvents;

var bcc = new Winkel();
bcc.GetExpensiveProducts();

Console.WriteLine("================");

bcc.GetCheapProducts();

Console.WriteLine("================");

bcc.GetProductsStartingWithS();


Predicate<Product> cheapFilter = delegate (Product product)
{
	return product.Price < 5M;
};

Predicate<Product> startingWithSFilter = delegate (Product product)
{
	return product.Description.StartsWith("S");
};

Console.WriteLine("========================");
Console.WriteLine("===en nu de predicates==");
Console.WriteLine("========================");
Console.WriteLine("========================");

bcc.FilterProducts(p => p.Price > 100M, p => Console.WriteLine($"P: {p.Description}"));

//Console.WriteLine("================");

//bcc.FilterProducts(cheapFilter, "Goedkoop");

//Console.WriteLine("================");

//bcc.FilterProducts(startingWithSFilter, "S: ");
