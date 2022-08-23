using Hangman.Backend.DataAccess;
using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Repositories
{
    public class PlayerInMemoryRepository : IPlayerRepository
    {
        public Task<PlayerEntity?> Get(string name)
        {
            return Task.FromResult(StaticData.Players.SingleOrDefault(x => x.Name == name));
        }

        public Task<PlayerEntity> Create(string name)
        {
            var player = new PlayerEntity
            {
                Id = StaticData.Players.Any() ? StaticData.Players.Max(x => x.Id) + 1 : 1,
                Name = name
            };
            StaticData.Players.Add(player);
            return Task.FromResult(player);
        }

        public Task<IEnumerable<PlayerEntity>> GetTop10()
		{
            return Task.FromResult(StaticData.Players.OrderByDescending(x => x.NrOfSolvedGames - x.NrOfUnsolvedGames).Take(10).AsEnumerable());
		}

        public Task<PlayerEntity> Update(PlayerEntity updatedPlayer)
        {
            var player = StaticData.Players.Single(x => x.Id == updatedPlayer.Id);
            player.NrOfSolvedGames = updatedPlayer.NrOfSolvedGames;
            player.NrOfUnsolvedGames = updatedPlayer.NrOfUnsolvedGames;
            return Task.FromResult(player);
        }
    }
}
