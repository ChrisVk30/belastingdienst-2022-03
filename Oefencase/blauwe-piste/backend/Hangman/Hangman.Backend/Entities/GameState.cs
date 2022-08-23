using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
	public enum GameState
	{
		InProgress = 1,

		Solved = 2,

		Unsolved = 3
	}
}
