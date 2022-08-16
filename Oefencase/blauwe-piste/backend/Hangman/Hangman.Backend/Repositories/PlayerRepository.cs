using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Repositories
{
    public class PlayerRepository : IPlayerRepository
    {
        private static List<PlayerEntity> s_players = new();

        public Task<PlayerEntity?> Get(string name)
        {
            return Task.FromResult(s_players.SingleOrDefault(x => x.Name == name));
        }

        public Task<PlayerEntity> Create(string name)
        {
            var player = new PlayerEntity
            {
                Id = s_players.Any() ? s_players.Max(x => x.Id) + 1 : 1,
                Name = name
            };
            s_players.Add(player);
            return Task.FromResult(player);
        }
    }
}
