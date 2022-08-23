using Hangman.Backend.Controllers;
using Hangman.Backend.Entities;
using Hangman.Backend.Repositories;
using Hangman.Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace Hangman.Backend.Tests
{
	public class GuessControllerTests
	{
		GuessController _sut;
		Mock<IGameRepository> _mockGameRepo;
		Mock<IPlayerRepository> _mockPlayerRepo;
		Mock<IGameService> _mockGameService;
		PlayerEntity _mockPlayer;
		GameEntity _mockGame;

		public GuessControllerTests()
		{
			_mockGameRepo = new();
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(_mockGame);
			_mockGameRepo.Setup(x => x.Create(It.IsAny<GameEntity>())).ReturnsAsync(_mockGame);

			_mockPlayerRepo = new();

			_mockGameService = new();
			_mockGameService.Setup(x => x.IsValidGuess(It.IsAny<GameEntity>(), It.IsAny<string>())).Returns((true, null));
			_mockGameService.Setup(x => x.HasWordBeenGuessed(It.IsAny<GameEntity>())).Returns(false);

			_mockPlayer = new PlayerEntity { Id = 4, NrOfSolvedGames = 2, NrOfUnsolvedGames = 5 };
			_mockGame = new GameEntity { Player = _mockPlayer };

			_sut = new GuessController(_mockGameRepo.Object, _mockGameService.Object, _mockPlayerRepo.Object);
		}

		[Fact]
		public async Task Post_InvalidGuess_BadRequest()
		{
			_mockGameService.Setup(x => x.IsValidGuess(It.IsAny<GameEntity>(), It.IsAny<string>())).Returns((false, "nope"));
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity
			{
				WordToGuess = "TEST",
				GuessedLetters = "T",
				NrOfIncorrectGuesses = GameService.MaxNrOfGuesses,
				Player = _mockPlayer
			});

			var result = await _sut.Post(new() { GameId = 4, Letter = "E" });
			Assert.IsType<BadRequestObjectResult>(result.Result);
			var badRequestResult = result?.Result as BadRequestObjectResult;
			Assert.Equal("nope", badRequestResult.Value);
			_mockGameRepo.Verify(x => x.Update(It.IsAny<GameEntity>()), Times.Never());
		}

		[Fact]
		public async Task Post_IncorrectValidGuess_RegisterLetterAndIncrementNrOfIncorrectGuessesAndPersist()
		{
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity
			{
				WordToGuess = "TEST",
				GuessedLetters = "T",
				NrOfIncorrectGuesses = 3,
				Player = _mockPlayer
			});

			var result = await _sut.Post(new() { GameId = 4, Letter = "Q" });
			Assert.IsType<GameEntity>(result?.Value);
			Assert.Equal(GameState.InProgress, result.Value.State);
			Assert.Equal("TQ", result.Value.GuessedLetters);
			Assert.Equal(4, result.Value.NrOfIncorrectGuesses);
			_mockGameRepo.Verify(x => x.Update(It.IsAny<GameEntity>()));
			_mockPlayerRepo.Verify(x => x.Update(It.IsAny<PlayerEntity>()), Times.Never());
		}

		[Fact]
		public async Task Post_IncorrectFinalValidGuess_RegisterLetterAndIncrementNrOfIncorrectGuessesAndMarkUnsolvedAndUpdatePlayerStatsAndPersist()
		{
			var nrOfSolvedGamesBefore = _mockPlayer.NrOfSolvedGames;
			var nrOfUnsolvedGamesBefore = _mockPlayer.NrOfUnsolvedGames;
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity
			{
				WordToGuess = "TEST",
				GuessedLetters = "T",
				NrOfIncorrectGuesses = GameService.MaxNrOfGuesses - 1,
				Player = _mockPlayer
			});

			var result = await _sut.Post(new() { GameId = 4, Letter = "Q" });

			Assert.IsType<GameEntity>(result?.Value);
			Assert.Equal(GameState.Unsolved, result.Value.State);
			Assert.NotNull(result.Value.End);
			Assert.Equal("TQ", result.Value.GuessedLetters);
			Assert.Equal(GameService.MaxNrOfGuesses, result.Value.NrOfIncorrectGuesses);
			_mockGameRepo.Verify(x => x.Update(It.IsAny<GameEntity>()));
			_mockPlayerRepo.Verify(x => x.Update(It.Is<PlayerEntity>(p => 
				p.NrOfUnsolvedGames == nrOfUnsolvedGamesBefore + 1 &&
				p.NrOfSolvedGames == nrOfSolvedGamesBefore
			)));
		}

		[Fact]
		public async Task Post_CorrectValidGuessWithoutSolving_RegisterLetterAndPersist()
		{
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity
			{
				WordToGuess = "TEST",
				GuessedLetters = "T",
				NrOfIncorrectGuesses = 3,
				Player = _mockPlayer
			});

			var result = await _sut.Post(new() { GameId = 4, Letter = "E" });
			Assert.IsType<GameEntity>(result?.Value);
			Assert.Equal(GameState.InProgress, result.Value.State);
			Assert.Equal("TE", result.Value.GuessedLetters);
			Assert.Equal(3, result.Value.NrOfIncorrectGuesses);
			_mockGameRepo.Verify(x => x.Update(It.IsAny<GameEntity>()));
			_mockPlayerRepo.Verify(x => x.Update(It.IsAny<PlayerEntity>()), Times.Never());
		}

		[Fact]
		public async Task Post_CorrectGuessThatSolvesWord_MarkGameAsSolvedAndPersist()
		{
			var nrOfSolvedGamesBefore = _mockPlayer.NrOfSolvedGames;
			var nrOfUnsolvedGamesBefore = _mockPlayer.NrOfUnsolvedGames;
			_mockGameService.Setup(x => x.HasWordBeenGuessed(It.IsAny<GameEntity>())).Returns(true);
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity
			{
				WordToGuess = "TEST",
				GuessedLetters = "TS",
				Player = _mockPlayer
			});

			var result = await _sut.Post(new() { GameId = 4, Letter = "E" });
			Assert.IsType<GameEntity>(result?.Value);
			Assert.Equal(GameState.Solved, result.Value.State);
			Assert.NotNull(result.Value.End);
			Assert.Equal("TSE", result.Value.GuessedLetters);
			_mockGameRepo.Verify(x => x.Update(It.IsAny<GameEntity>()));
			_mockPlayerRepo.Verify(x => x.Update(It.Is<PlayerEntity>(p =>
				p.NrOfUnsolvedGames == nrOfUnsolvedGamesBefore &&
				p.NrOfSolvedGames == nrOfSolvedGamesBefore + 1
			)));
		}
	}
}