using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
    public class PlayerEntity
    {
        public int Id { get; set; }

        [MaxLength(255)]
        public string Name { get; set; }

		public int NrOfSolvedGames { get; set; }

		public int NrOfUnsolvedGames { get; set; }

		[JsonIgnore]
        public List<GameEntity> Games { get; set; }
    }
}
