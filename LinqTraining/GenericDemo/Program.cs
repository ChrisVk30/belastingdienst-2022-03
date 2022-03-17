// See https://aka.ms/new-console-template for more information
using GenericDemo;
using System.Collections;

Console.WriteLine("Hello, World!");


// generics

var lijstje = new ArrayList();
lijstje.Add(4);
lijstje.Add(8);
lijstje.Add(15);
//lijstje.Add("oeps");

foreach (var item in lijstje)
{
	var getal = (int)item;
	Console.WriteLine(getal * 2);
}


var veelBeterLijstje = new List<int>();
veelBeterLijstje.Add(4);
veelBeterLijstje.Add(8);
veelBeterLijstje.Add(15);
//veelBeterLijstje.Add("oeps");

//List<object> nogBeterLijstje = veelBeterLijstje;
//nogBeterLijstje.Add(" strio");
//nogBeterLijstje.Add('a');
//nogBeterLijstje.Add(true);

//foreach (var item in veelBeterLijstje)
//{
//	Console.WriteLine(item * 2);
//}



//var mijn = new MijnClass<int>(); // struct
//var mijn2 = new MijnClass<string>();
//var mijn3 = new MijnClass<bool>(); // struct

//mijn.DoeIets()
//mijn2.DoeIets()
//	mijn3.DoeIets()

// hashtable hashmap map dictionary

var tekst = "Hallo ik ben JP en ik ben training aan het geven";
var dict = new Dictionary<char, int>();

foreach (var character in tekst)
{
	if (!dict.ContainsKey(character))
	{
		dict.Add(character, 0);
	}

	dict[character]++;
}

foreach(var key in dict.Keys)
{
	Console.WriteLine($"karakter {key} komt {dict[key]} keer voor");
}


/*
 * a => 5
 * b => 18
 * g => 23
 */

//var mijnCustomList = new MijnClass<int>();
//foreach (var item in mijnCustomList)
//{

//}



var mijnList = new MyList<int>();
mijnList.Add(4);
mijnList.Add(8);
mijnList.Add(15);
mijnList.Add(16);
mijnList.Add(23);


foreach (var item in mijnList)
{
	Console.WriteLine($"mijn item: {item}");
}

var mijnStringList = new MyList<string>();
