using Hangman.Backend.Entities;
using Hangman.Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Controllers
{
	[Route("api/highscore")]
	[ApiController]
	public class HighScoreController : ControllerBase
	{
		private readonly IGameRepository _gameRepository;
		private readonly IPlayerRepository _playerRepository;
		public HighScoreController(IGameRepository gameRepository, IPlayerRepository playerRepository)
		{
			_gameRepository = gameRepository;
			_playerRepository = playerRepository;
		}

		[HttpGet]
		[Route("players")]
		public async Task<IEnumerable<PlayerEntity>> GetTop10Players()
		{
			return await _playerRepository.GetTop10();
		}

		[HttpGet]
		[Route("fastest-games")]
		public async Task<IEnumerable<PlayerEntity>> GetTop10FastestTimes()
		{
			throw new NotImplementedException();
		}
	}
}
