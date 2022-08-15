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
        private static List<GameEntity> s_games = new List<GameEntity>();

        public async Task<GameEntity> Create()
        {
            return null;

        }

        public async Task<IEnumerable<GameEntity>> GetAll()
        {
            return null;

        }

        public async Task<GameEntity> Get(int id)
        {
            return null;

        }
    }
}
