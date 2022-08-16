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
        public async Task<PlayerEntity> Get(string name)
        {
            throw new NotImplementedException();
        }

        public async Task<PlayerEntity> Create(string name)
        {
            throw new NotImplementedException();
        }
    }
}
