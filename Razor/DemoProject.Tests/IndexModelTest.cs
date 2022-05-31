using DemoProject.Entities;
using DemoProject.Pages;
using DemoProject.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoProject.Tests
{
    [TestClass]
    public class IndexModelTest
    {
        // methodname_state_expectedresult
        // different conventions available: https://dzone.com/articles/7-popular-unit-test-naming

        private Mock<ITelevisionRepository> _mockTelevisionRepository;
        private IndexModel _sut;

        [TestInitialize]
        public void Setup()
        {
            // Arrange
            _mockTelevisionRepository = new Mock<ITelevisionRepository>(MockBehavior.Strict);
            _mockTelevisionRepository.Setup(x => x.Add(It.IsAny<TelevisionEntity>())).ReturnsAsync(new TelevisionEntity());
            _mockTelevisionRepository.Setup(x => x.GetAll()).ReturnsAsync(new List<TelevisionEntity>());

            _sut = new IndexModel(_mockTelevisionRepository.Object); // System Under Test
            _sut.NewTelevision = new TelevisionEntity();
        }


        [TestMethod]
        public async Task OnPostAsync_ValidModel_AddAndRedirect()
        {
            // Act
            var result = await _sut.OnPostAsync();

            // Assert
            _mockTelevisionRepository.Verify(x => x.Add(It.IsAny<TelevisionEntity>()));
            _mockTelevisionRepository.Verify(x => x.GetAll(), Times.Never());
            Assert.IsInstanceOfType(result, typeof(RedirectToPageResult));
        }

        [TestMethod]
        public async Task OnPostAsync_InvalidModel_AddAndRedirect()
        {
            // Arrange
            _sut.ModelState.AddModelError("q", "q"); // simulate ASP.NET Core model binding validation error

            // Act
            var result = await _sut.OnPostAsync();

            // Assert
            _mockTelevisionRepository.Verify(x => x.Add(It.IsAny<TelevisionEntity>()), Times.Never());
            _mockTelevisionRepository.Verify(x => x.GetAll());
            Assert.IsInstanceOfType(result, typeof(PageResult));
        }
    }
}