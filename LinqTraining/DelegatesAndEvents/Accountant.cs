using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesAndEvents
{
	public class Accountant
	{
		public void HandleHighWithdrawals(BankAccount sender, WithdrawalEventArgs args)
		{
			Console.WriteLine($"Whoa! Dat is een hoge afschrijving: {args.Amount}");
		}
	}
}
