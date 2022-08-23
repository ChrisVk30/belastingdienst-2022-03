using Hangman.Backend.DataAccess;
using Hangman.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Repositories
{
	public class GameDbRepository : IGameRepository
	{
		private readonly HangmanDbContext _context;
		public GameDbRepository(HangmanDbContext context)
		{
			_context = context;
		}

		public async Task<GameEntity> Create(GameEntity newGame)
		{
			
			_context.Games.Add(newGame);
			await _context.SaveChangesAsync();
			return newGame;
		}

		public async Task<GameEntity?> Get(int id)
		{
			return await _context.Games.Include(x => x.Player).SingleOrDefaultAsync(x => x.Id == id);
		}

		public async Task<IEnumerable<GameEntity>> GetAll()
		{
			return await _context.Games.Include(x => x.Player).ToListAsync();
		}

		public async Task<GameEntity> Update(GameEntity updatedGame)
		{
			var game = await _context.Games.SingleAsync(x => x.Id == updatedGame.Id);
			game.GuessedLetters = updatedGame.GuessedLetters;
			game.State = updatedGame.State;
			game.NrOfIncorrectGuesses = updatedGame.NrOfIncorrectGuesses;
			await _context.SaveChangesAsync();
			return game;
		}
	}
}
