using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericDemo
{
	public class MijnClass<T> where T : IComparable<T>
	{
		public void DoeIets(T item)
		{

		}
	}
}
