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
	[Route("api/game/{gameId:int}/guess")]
	[ApiController]
	public class GuessController : ControllerBase
	{
		private readonly IGameRepository _gameRepository;
		private readonly IGameService _gameService;
		private readonly IPlayerRepository _playerRepository;

		public GuessController(IGameRepository gameRepository, IGameService gameService, IPlayerRepository playerRepository)
		{
			_gameRepository = gameRepository;
			_gameService = gameService;
			_playerRepository = playerRepository;
		}

		[HttpPost]
		public async Task<ActionResult<GameEntity>> Post(NewGuessDto newGuess)
		{
			var game = await _gameRepository.Get(newGuess.GameId);

			var (valid, message) = _gameService.IsValidGuess(game, newGuess.Letter);
			if (!valid)
			{
				return BadRequest(message);
			}

			game.GuessedLetters ??= "";
			game.GuessedLetters += newGuess.Letter;

			if (!game.WordToGuess.ToUpper().Contains(newGuess.Letter.ToUpper()))
			{
				game.NrOfIncorrectGuesses++;
			}

			if (_gameService.HasWordBeenGuessed(game))
			{
				game.State = GameState.Solved;
				game.End = DateTime.Now;
				game.Player.NrOfSolvedGames++;
				await _playerRepository.Update(game.Player);
			}
			else if (game.NrOfIncorrectGuesses == GameService.MaxNrOfGuesses)
			{
				game.State = GameState.Unsolved;
				game.End = DateTime.Now;
				game.Player.NrOfUnsolvedGames++;
				await _playerRepository.Update(game.Player);
			}

			await _gameRepository.Update(game);
			return game;
		}
	}
}
