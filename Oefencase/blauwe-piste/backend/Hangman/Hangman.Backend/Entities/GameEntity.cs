using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
    public class GameEntity
    {
        public int Id { get; set; }

		[MaxLength(255)]
		public string WordToGuess { get; set; }

		public int NrOfIncorrectGuesses { get; set; } = 0;

		[MaxLength(255)]
		public string? GuessedLetters { get; set; }

		public GameState State { get; set; } = GameState.InProgress;

		public int PlayerId { get; set; }

        public PlayerEntity Player { get; set; }

		public DateTime Start { get; set; }

		public DateTime? End { get; set; }
	}
}
