﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesAndEvents
{
	public class WithdrawalEventArgs : EventArgs
	{
		public decimal Amount { get; set; }
	}
}
