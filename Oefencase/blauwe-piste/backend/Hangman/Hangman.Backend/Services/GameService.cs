using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Services
{
	public class GameService : IGameService
	{
		public readonly static int MaxNrOfGuesses = 5;

		public (bool, string) IsValidGuess(GameEntity game, string letter)
		{
			if (game.State != GameState.InProgress)
			{
				return (false, "Helaas, je mag niet meer raden. Het spel zit erop!");
			}
			if (game.GuessedLetters != null && game.GuessedLetters.Contains(letter))
			{
				return (false, $"De letter {letter} heb je al geprobeerd, probeer een andere!");
			}
			return (true, null);
		}

		public bool HasWordBeenGuessed(GameEntity game)
		{
			// filter out spaces and uppercase it for comparison
			var word = game.WordToGuess.Replace(" ", "").ToUpper();
			foreach (var letter in word)
			{
				if (game.GuessedLetters == null || !game.GuessedLetters.Contains(letter.ToString()))
				{
					return false;
				}
			}

			return true;
		}
	}
}
