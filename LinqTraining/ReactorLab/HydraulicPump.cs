using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactorLab
{
	public class HydraulicPump
	{
		public void Cool(Reactor reactor, ReactorEventArgs args)
		{
			reactor.Temperature -= 50;
			Console.WriteLine("[hydraulic] Cooling!");
		}
	}
}
