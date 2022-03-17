using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericDemo
{
	public class MyList<T> : IEnumerable<T> where T : struct // foreach
	{
		T[] innerList = new T[4];
		int newIndex = 0;

		public void Add(T value)
		{
			if (newIndex == innerList.Length - 1)
			{
				Console.WriteLine("Resizing");
				Array.Resize(ref innerList, innerList.Length * 2);
			}

			innerList[newIndex] = value;
			newIndex++;
		}

		public IEnumerator<T> GetEnumerator()
		{
			for (int i = 0; i < innerList.Length; i++)
			{
				yield return innerList[i];
			}
		}

		IEnumerator IEnumerable.GetEnumerator()
		{
			return innerList.GetEnumerator();
		}
	}
}
