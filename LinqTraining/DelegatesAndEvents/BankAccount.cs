using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesAndEvents
{
	public class BankAccount
	{
		public string Holder { get; set; }

		public delegate void WithdrawalEventHandler(BankAccount sender, WithdrawalEventArgs args);

		public event WithdrawalEventHandler TooHighWithdrawn;

		public void Withdraw(decimal amount)
		{
			Console.WriteLine($"{amount} afschrijven");
			if (amount > 10000M)
			{
				Console.WriteLine("Oeh hoog bedrag");
				var args = new WithdrawalEventArgs { Amount = amount };
				TooHighWithdrawn.Invoke(this, args); // publish
			}
		}
	}
}
