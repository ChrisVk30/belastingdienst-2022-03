using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Dtos
{
    public class NewGuessDto
    {
        public int GameId { get; set; }

        public string Letter { get; set; }
    }
}
