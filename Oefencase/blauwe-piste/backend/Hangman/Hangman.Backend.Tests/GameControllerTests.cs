using Hangman.Backend.Controllers;
using Hangman.Backend.Entities;
using Hangman.Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace Hangman.Backend.Tests
{
    public class GameControllerTests
    {
        GameController _sut;
        Mock<IGameRepository> _mockGameRepo;
        Mock<IPlayerRepository> _mockPlayerRepo;

        public GameControllerTests()
        {
            _mockGameRepo = new Mock<IGameRepository>();
            _mockPlayerRepo = new Mock<IPlayerRepository>();
            _sut = new GameController(_mockGameRepo.Object, _mockPlayerRepo.Object);
        }

        [Fact]
        public async Task Get_ValidId_ReturnGameIfFoundByRepo()
        {
            _mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity());
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
        public async Task Post_ExistingPlayerName_AddGameToPlayerUsingMultipleRepos()
        {
            _mockPlayerRepo.Setup(x => x.Get(It.IsAny<string>())).ReturnsAsync(new PlayerEntity { Id = 4 });
            _mockGameRepo.Setup(x => x.Create(It.IsAny<PlayerEntity>())).ReturnsAsync(new GameEntity());

            var result = await _sut.Post(new() { PlayerName = "Frank" });

            _mockPlayerRepo.Verify(x => x.Create(It.IsAny<string>()), Times.Never());
            _mockGameRepo.Verify(x => x.Create(It.IsAny<PlayerEntity>()));
            Assert.NotNull(result?.Value);
        }
    }
}