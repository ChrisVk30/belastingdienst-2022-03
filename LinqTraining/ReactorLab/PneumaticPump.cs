using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactorLab
{
	public class PneumaticPump
	{
		public void Cool(Reactor reactor, ReactorEventArgs args)
		{
			reactor.Temperature -= 20;
			Console.WriteLine("[pneumatic] Cooling!");
		}
	}
}
