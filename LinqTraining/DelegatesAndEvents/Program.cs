// See https://aka.ms/new-console-template for more information
using DelegatesAndEvents;

//var bcc = new Winkel();
//bcc.GetExpensiveProducts();

//Console.WriteLine("================");

//bcc.GetCheapProducts();

//Console.WriteLine("================");

//bcc.GetProductsStartingWithS();

//Predicate<Product> cheapFilter = delegate (Product product)
//{
//	return product.Price < 5M;
//};

//Predicate<Product> startingWithSFilter = delegate (Product product)
//{
//	return product.Description.StartsWith("S");
//};

//Console.WriteLine("========================");
//Console.WriteLine("===en nu de predicates==");
//Console.WriteLine("========================");
//Console.WriteLine("========================");


// java / javascript

// lisp haskell 

// lambda expressie

//bcc.FilterProducts(p => p.Price > 100M, p => Console.WriteLine($"P: {p.Description}"));

//Console.WriteLine("================");

//bcc.FilterProducts(cheapFilter, "Goedkoop");

//Console.WriteLine("================");

//bcc.FilterProducts(startingWithSFilter, "S: ");



//var frank = new Accountant();

//var account = new BankAccount { Holder = "Wesley" };

//// subscribe
//account.TooHighWithdrawn += frank.HandleHighWithdrawals;

//account.Withdraw(500M);
//account.Withdraw(50000M);
//account.Withdraw(300M);
//account.Withdraw(500M);



var watcher = new FileSystemWatcher("C:\\belastindienst");
watcher.Created += (sender, args) =>
{
	global::System.Console.WriteLine("Bestand aangemaakt");
};
watcher.Deleted += (sender, args) =>
{
	global::System.Console.WriteLine("Bestand verwijderd");
};

watcher.EnableRaisingEvents = true;


while(true)
{
	Thread.Sleep(100);
}