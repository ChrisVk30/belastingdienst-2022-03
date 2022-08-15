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

        public GameControllerTests()
        {
            _mockGameRepo = new Mock<IGameRepository>();
            _sut = new GameController(_mockGameRepo.Object);
        }

        [Fact]
        public async Task GetWithValidIdShouldReturnGame()
        {
            _mockGameRepo.Setup(x => x.Get(It.IsAny<int>())).ReturnsAsync(new GameEntity());
            var result = await _sut.Get(14);
            Assert.NotNull(result?.Value);
        }

        [Fact]
        public async Task GetWithNotExistingIdShouldReturnNotFound()
        {

        }
    }
}