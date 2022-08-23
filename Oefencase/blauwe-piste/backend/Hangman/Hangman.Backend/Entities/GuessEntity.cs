using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
    public class GuessEntity
    {
        public int Id { get; set; }

        public int GameId { get; set; }

        public GameEntity Game { get; set; }

        public string Letter { get; set; }
    }
}
