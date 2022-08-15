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

        public GameController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        [HttpGet]
        public async Task<ActionResult<GameEntity>> Get(int id)
        {
            return await _gameRepository.Get(id);

        }

        [HttpPost]
        public async Task<ActionResult<GameEntity>> Post()
        {
            return null;
        }

        //public async Task<IActionResult> Guess()
        //{

        //}
    }
}
