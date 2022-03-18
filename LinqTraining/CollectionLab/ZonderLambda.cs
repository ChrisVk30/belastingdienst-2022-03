using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionLab
{
    public class ZonderLambda
    {
        public void PrintStrings(List<string> strings)
        {
            int index = 0;
            while (index < strings.Count)
            {
                Console.WriteLine(strings[index]);
                index++;
            }
        }

        public void CheckSmallerThanZero(List<string> testStrings)
        {
            foreach (var s in testStrings)
            {
                double d;
                if (double.TryParse(s, out d))
                {
                    if (d < 0)
                    {
                        Console.WriteLine($"{d} is kleiner dan 0");
                    }
                }
            }
        }

        public void CheckIfListOnlyContainsNumbers(List<string> testStrings)
        {
            foreach (var s in testStrings)
            {
                if (!double.TryParse(s, out double d))
                {
                    Console.WriteLine("Lijst bevat niet alleen maar getallen");
                    return;
                }
            }

            Console.WriteLine("Ja! Lijst bevat enkel getallen");
        }

        public List<string> FilterDecimals(List<string> testStrings)
        {
            var decimals = new List<string>();
            foreach (var s in testStrings)
            {
                decimal d;
                if(!int.TryParse(s, out int i) && decimal.TryParse(s, out d))
                {
                    decimals.Add(s);
                }
            }

            return decimals;
        }

        public List<double> ConvertToDoubles(List<string> stringDecimals)
        {
            var doubles = new List<double>();

            foreach (var s in stringDecimals)
            {
                var d = Convert.ToDouble(s); // vs double.Parse()
                doubles.Add(d);
            }

            return doubles;
        }

        public void Sum(List<double> doubles)
        {
            var total = 0d;
            foreach (var d in doubles)
            {
                total += d;
            }
            Console.WriteLine($"Totaal = {total}");
        }
    }
}
