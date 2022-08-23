using Hangman.Backend.Controllers;
using Hangman.Backend.Entities;
using Hangman.Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Hangman.Backend.Tests
{
	public class GameControllerTests
	{
		GameController _sut;
		Mock<IGameRepository> _mockGameRepo;
		Mock<IPlayerRepository> _mockPlayerRepo;
		Mock<IWordRepository> _mockWordRepo;
		WordEntity _mockWord = new WordEntity { Id = 9, Word = "TESTORZ" };
		PlayerEntity _mockExistingPlayer = new PlayerEntity { Id = 4, NrOfSolvedGames = 2, NrOfUnsolvedGames = 5 };

		public GameControllerTests()
		{
			_mockGameRepo = new Mock<IGameRepository>();
			_mockGameRepo.Setup(x => x.GetAll()).ReturnsAsync(new List<GameEntity>
			{
				new(),
				new(),
				new()
			});
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity());
			_mockGameRepo.Setup(x => x.Create(It.IsAny<GameEntity>())).ReturnsAsync(new GameEntity());

			_mockPlayerRepo = new Mock<IPlayerRepository>();
			_mockPlayerRepo.Setup(x => x.Get(It.IsAny<string>())).ReturnsAsync(_mockExistingPlayer);
			_mockPlayerRepo.Setup(x => x.Create(It.IsAny<string>())).ReturnsAsync(new PlayerEntity { Id = 8, Name = "Frank" });

			_mockWordRepo = new Mock<IWordRepository>();
			_mockWordRepo.Setup(x => x.GetRandomWord()).ReturnsAsync(_mockWord);

			_sut = new GameController(_mockGameRepo.Object, _mockPlayerRepo.Object, _mockWordRepo.Object);
		}

		[Fact]
		public async Task GetAll_UseRepoToRetrieveGames()
		{
			var result = await _sut.GetAll();
			_mockGameRepo.Verify(x => x.GetAll());
			Assert.Equal(3, result.Count());
		}

		[Fact]
		public async Task Get_ValidId_ReturnGameIfFoundByRepo()
		{
			var result = await _sut.Get(14);
			Assert.NotNull(result?.Value);
		}

		[Fact]
		public async Task Get_NotExistingId_ReturnNotFoundIfNotFoundByRepo()
		{
			_mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(() => null);
			var result = await _sut.Get(14);
			Assert.IsType<NotFoundResult>(result.Result);
			Assert.Null(result?.Value);
		}

		[Fact]
		public async Task Post_ExistingPlayer_UseWordRepoForTheWordToBeGuessedAndAddGameToPlayer()
		{
			var result = await _sut.Post(new() { PlayerName = "Frank" });

			_mockPlayerRepo.Verify(x => x.Create(It.IsAny<string>()), Times.Never());
			_mockGameRepo.Verify(x => x.Create(It.Is<GameEntity>(g => 
				g.WordToGuess == _mockWord.Word &&
				g.Start.Year > 2000
			)));
			_mockWordRepo.Verify(x => x.GetRandomWord());
			Assert.NotNull(result?.Value);

			// there are fancier ways of dealing with DateTime.Now, Microsoft Fakes to name one.
			// unfortunately, Microsoft Fakes is only available for Visual Studio Enterprise. so "Year > 2000" will do for now.
		}

		[Fact]
		public async Task Post_NonExistentPlayer_CreatePlayerAndUseWordRepoForTheWordToBeGuessedAndAddGameToNewlyCreatedPlayer()
		{
			_mockPlayerRepo.Setup(x => x.Get(It.IsAny<string>())).ReturnsAsync(() => null);

			var result = await _sut.Post(new() { PlayerName = "Frank" });

			_mockPlayerRepo.Verify(x => x.Create(It.IsAny<string>()));
			_mockGameRepo.Verify(x => x.Create(It.Is<GameEntity>(g => g.WordToGuess == _mockWord.Word && g.Start.Year > 2000)));
			_mockWordRepo.Verify(x => x.GetRandomWord());
			Assert.NotNull(result?.Value);

			// there are fancier ways of dealing with DateTime.Now, Microsoft Fakes to name one.
			// unfortunately, Microsoft Fakes is only available for Visual Studio Enterprise. so "Year > 2000" will do for now.
		}
	}
}