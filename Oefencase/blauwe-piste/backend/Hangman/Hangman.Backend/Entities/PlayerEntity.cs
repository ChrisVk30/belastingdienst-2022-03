using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
    public class PlayerEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<GameEntity> Games { get; set; }
    }
}
