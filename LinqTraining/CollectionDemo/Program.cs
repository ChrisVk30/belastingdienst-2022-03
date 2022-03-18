// See https://aka.ms/new-console-template for more information
using CollectionDemo;

Console.WriteLine("Hello, World!");


var linked = new LinkedList<int>();
linked.AddFirst(4);

linked.AddFirst(8);
linked.AddLast(15);

var derdeItem = linked.Find(15);

linked.AddAfter(derdeItem, 23);
linked.AddLast(42);


foreach (var getal in linked)
{
    Console.WriteLine($"getal: {getal}");
}

// 8 4 15 23 42

/**
 * IEnumerable<T>: met een loopje erdoor kunnen gaan  .MoveNext()  .Current
 * ICollection<T>: .Count   .Add() .Remove()
 * IList<T>      : .InsertAt
 */


var leverancier = new DataLeverancier();
var data = leverancier.GeefData();

foreach (var item in data)
{
    Console.WriteLine($"item: {item}");
}





