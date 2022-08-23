using Hangman.Backend.Dtos;
using Hangman.Backend.Entities;
using Hangman.Backend.Repositories;
using Hangman.Backend.Services;
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
        private readonly IGameRepository _gameRepository;
        private readonly IPlayerRepository _playerRepository;
        private readonly IWordRepository _wordRepository;

        public GameController(IGameRepository gameRepository, IPlayerRepository playerRepository, IWordRepository wordRepository)
        {
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _wordRepository = wordRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<GameEntity>> GetAll()
        {
            return await _gameRepository.GetAll();
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<GameEntity>> Get(int id)
        {
            var game = await _gameRepository.Get(id);
            return game == null ? NotFound() : game;
        }

        [HttpPost]
        public async Task<ActionResult<GameEntity>> Post(NewGameDto newGameDto)
        {
            var player = await _playerRepository.Get(newGameDto.PlayerName);
            player ??= await _playerRepository.Create(newGameDto.PlayerName);

            var newGame = new GameEntity
            {
                PlayerId = player.Id,
                WordToGuess = (await _wordRepository.GetRandomWord()).Word,
                Start = DateTime.Now
            };

            return await _gameRepository.Create(newGame);
        }
    }
}
