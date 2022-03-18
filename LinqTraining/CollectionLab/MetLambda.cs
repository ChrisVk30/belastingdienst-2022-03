using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionLab
{
    public class MetLambda
    {
        public void PrintStrings(List<string> strings)
        {
            strings.ForEach(s => Console.WriteLine($"lambda: {s}"));
        }

        public void CheckSmallerThanZero(List<string> testStrings)
        {
            var result = testStrings.Find(s => double.TryParse(s, out double d) && d < 0);
            if (result != null)
            {
                Console.WriteLine("Lijst bevat getallen kleiner dan 0");
            }
            else
            {
                Console.WriteLine("Lijst bevat GEEN getallen kleiner dan 0");
            }
        }

        public void CheckIfListOnlyContainsNumbers(List<string> testStrings)
        {
            var doubles = testStrings.FindAll(x => !double.TryParse(x, out double d));

            if (doubles.Count == 0)
            {
                Console.WriteLine("Lijst bevat alleen maar getallen");
            }
            else
            {
                Console.WriteLine("Lijst bevat NIET enkel getallen");
            }
        }

        public List<string> FilterDecimals(List<string> testStrings)
        {
            return testStrings.FindAll(x => !int.TryParse(x, out int i) && double.TryParse(x, out double d));
        }

        public List<double> ConvertToDoubles(List<string> stringDecimals)
        {
            var doubles = new List<double>();
            stringDecimals.ForEach(x => doubles.Add(Convert.ToDouble(x)));
            return doubles;
        }

        public void Sum(List<double> doubles)
        {
            //var total = 0d;
            //doubles.ForEach(x => total += x);
            Console.WriteLine($"Totaal met lambdas = {doubles.Sum()}"); // LINQ
        }
    }
}
