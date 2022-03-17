// See https://aka.ms/new-console-template for more information

using ReactorLab;

var chernobyl = new Reactor();

var hydraulic = new HydraulicPump();
var pneumatic = new PneumaticPump();

chernobyl.TemperatureTooHigh += hydraulic.Cool;
chernobyl.TemperatureTooHigh += pneumatic.Cool;

while (true)
{
	chernobyl.Split();
	//Thread.Sleep(100);
}
