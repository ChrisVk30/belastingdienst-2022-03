using Hangman.Backend.Entities;
using Hangman.Backend.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Hangman.Backend.Tests
{
	public class GameServiceTests
	{
		GameService _sut;

		public GameServiceTests()
		{
			_sut = new GameService();
		}

		[Fact]
		public void IsValidGuess_GameUnsolved_False()
		{
			var game = new GameEntity
			{
				GuessedLetters = "AJFIRIE",
				State = GameState.Unsolved,
				NrOfIncorrectGuesses = GameService.MaxNrOfGuesses
			};
			var (result, notification) = _sut.IsValidGuess(game, "P");
			Assert.False(result);
			Assert.NotNull(notification);
		}

		[Fact]
		public void IsValidGuess_GameSolved_False()
		{
			var game = new GameEntity
			{
				GuessedLetters = "AJFIRIE",
				State = GameState.Solved,
				NrOfIncorrectGuesses = 1
			};
			var (result, notification) = _sut.IsValidGuess(game, "P");
			Assert.False(result);
			Assert.NotNull(notification);
		}

		[Fact]
		public void IsValidGuess_LetterAlreadyGuessed_False()
		{
			var game = new GameEntity
			{
				GuessedLetters = "AJFIRIE"
			};
			var (result, notification) = _sut.IsValidGuess(game, "R");
			Assert.False(result);
			Assert.NotNull(notification);
		}

		[Fact]
		public void IsValidGuess_NoLettersGuessedYet_True()
		{
			var game = new GameEntity
			{
				GuessedLetters = null // being explicit for clarity
			};
			var (result, notification) = _sut.IsValidGuess(game, "R");
			Assert.True(result);
			Assert.Null(notification);
		}

		[Fact]
		public void IsValidGuess_GameInProgressWithUnguessedLetter_True()
		{
			var game = new GameEntity
			{
				GuessedLetters = "AJFIRIE",
				State = GameState.InProgress,
				NrOfIncorrectGuesses = 1
			};
			var (result, notification) = _sut.IsValidGuess(game, "P");
			Assert.True(result);
			Assert.Null(notification);
		}

		[Fact]
		public void HasWordBeenGuessed_AllLettersCorrect_True()
		{
			var game = new GameEntity
			{
				GuessedLetters = "STE",
				WordToGuess = "TEST"
			};
			Assert.True(_sut.HasWordBeenGuessed(game));
		}

		[Fact]
		public void HasWordBeenGuessed_AllLettersThereWithAFewIncorrectLetters_True()
		{
			var game = new GameEntity
			{
				GuessedLetters = "PSQTVEZ",
				WordToGuess = "TEST"
			};
			Assert.True(_sut.HasWordBeenGuessed(game));
		}

		[Fact]
		public void HasWordBeenGuessed_NotAllLettersGuessed_False()
		{
			var game = new GameEntity
			{
				GuessedLetters = "PQTVEZ",
				WordToGuess = "TEST"
			};
			Assert.False(_sut.HasWordBeenGuessed(game));
		}

		[Fact]
		public void HasWordBeenGuessed_NoLettersGuessed_False()
		{
			var game = new GameEntity
			{
				GuessedLetters = null,
				WordToGuess = "TEST"
			};
			Assert.False(_sut.HasWordBeenGuessed(game));
		}
	}
}
