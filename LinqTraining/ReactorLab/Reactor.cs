using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactorLab
{
	public class Reactor
	{
		public delegate void ReactorEventHandler(Reactor reactor, ReactorEventArgs args);

		public event ReactorEventHandler TemperatureTooHigh;

		public int Temperature { get; set; } = -30;

		public void Split()
		{
			Temperature += 10;
			Console.WriteLine($"SPLITTING... {Temperature}");

			if (Temperature > 130)
			{
				TemperatureTooHigh.Invoke(this, new ReactorEventArgs { Temperature = Temperature });
			}
		}
	}
}
