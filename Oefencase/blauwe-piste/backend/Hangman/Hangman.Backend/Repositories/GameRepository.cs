using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Repositories
{
    public class GameRepository : IGameRepository
    {
        private static List<GameEntity> s_games = new();

        public Task<IEnumerable<GameEntity>> GetAll()
        {
            return Task.FromResult(s_games.AsEnumerable());
        }

        public Task<GameEntity?> Get(int id)
        {
            return Task.FromResult(s_games.SingleOrDefault(x => x.Id == id));
        }

        public Task<GameEntity> Create(PlayerEntity player)
        {
            var game = new GameEntity
            {
                Id = s_games.Any() ? s_games.Max(x => x.Id) + 1 : 1,
                Player = player,
                PlayerId = player.Id
            };
            s_games.Add(game);
            return Task.FromResult(game);
        }
    }
}
