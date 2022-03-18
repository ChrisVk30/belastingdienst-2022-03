using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionDemo
{
    public class DataLeverancier
    {
        public IEnumerable<int> GeefData()
        {
            // deelresultaat  partial result
            Console.WriteLine("eerste");
            yield return 4;
            Console.WriteLine("tweede");
            yield return 8;
            Console.WriteLine("derde");
            yield return 15;
            Console.WriteLine("vierde");
            yield return 16;
        }
    }
}
