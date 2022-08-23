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
	public class PlayerDbRepository : IPlayerRepository
	{
		private readonly HangmanDbContext _context;
		public PlayerDbRepository(HangmanDbContext context)
		{
			_context = context;
		}

		public async Task<PlayerEntity> Create(string name)
		{
			var newPlayer = new PlayerEntity { Name = name };
			_context.Players.Add(newPlayer);
			await _context.SaveChangesAsync();
			return newPlayer;
		}

		public async Task<PlayerEntity?> Get(string name)
		{
			return await _context.Players.SingleOrDefaultAsync(x => x.Name == name);
		}

		public async Task<IEnumerable<PlayerEntity>> GetTop10()
		{
			return await _context.Players.OrderByDescending(x => x.NrOfSolvedGames - x.NrOfUnsolvedGames).Take(10).ToListAsync();
		}

		public async Task<PlayerEntity> Update(PlayerEntity updatedPlayer)
		{
			var player = await _context.Players.SingleAsync(x => x.Id == updatedPlayer.Id);
			player.NrOfSolvedGames = updatedPlayer.NrOfSolvedGames;
			player.NrOfUnsolvedGames = updatedPlayer.NrOfUnsolvedGames;
			await _context.SaveChangesAsync();
			return player;
		}
	}
}
