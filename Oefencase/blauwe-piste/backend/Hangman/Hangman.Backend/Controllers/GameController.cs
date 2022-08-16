using Hangman.Backend.Dtos;
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
    [Route("api/game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private IGameRepository _gameRepository;
        private IPlayerRepository _playerRepository;

        public GameController(IGameRepository gameRepository, IPlayerRepository playerRepository)
        {
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
        }

        [HttpGet]
        public async Task<ActionResult<GameEntity>> Get(int id)
        {
            var game = await _gameRepository.Get(id);
            return game == null ? NotFound() : game;
        }

        [HttpPost]
        public async Task<ActionResult<GameEntity>> Post(NewGameDto newGameDto)
        {
            var player = await _playerRepository.Get(newGameDto.PlayerName);
            return await _gameRepository.Create(player);
        }

        //public async Task<IActionResult> Guess()
        //{

        //}
    }
}
