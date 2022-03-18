// See https://aka.ms/new-console-template for more information


using CollectionLab;

var testStrings = new List<string>
{
    "123",
    "45.67",
    "-133",
    "JP",
    "-594.594",
    "9999"
};

//var zonderLambda = new ZonderLambda();
//zonderLambda.PrintStrings(testStrings);

//Console.WriteLine("==========");
//Console.WriteLine("kleiner dan 0:");
//zonderLambda.CheckSmallerThanZero(testStrings);

//Console.WriteLine("==========");
//zonderLambda.CheckIfListOnlyContainsNumbers(testStrings);

//Console.WriteLine("==========");
//var decimals = zonderLambda.FilterDecimals(testStrings);
//Console.WriteLine($"Aantal decimalen: {decimals.Count}");

//var doubles = zonderLambda.ConvertToDoubles(decimals);
//Console.WriteLine($"Aantal doubles: {decimals.Count}");

//zonderLambda.Sum(doubles);

var metLambda = new MetLambda();

metLambda.PrintStrings(testStrings);

Console.WriteLine("==========");
Console.WriteLine("kleiner dan 0:");
metLambda.CheckSmallerThanZero(testStrings);

Console.WriteLine("==========");
metLambda.CheckIfListOnlyContainsNumbers(testStrings);

Console.WriteLine("==========");
var decimals = metLambda.FilterDecimals(testStrings);
Console.WriteLine($"Aantal decimalen: {decimals.Count}");

var doubles = metLambda.ConvertToDoubles(decimals);
Console.WriteLine($"Aantal doubles: {decimals.Count}");

metLambda.Sum(doubles);