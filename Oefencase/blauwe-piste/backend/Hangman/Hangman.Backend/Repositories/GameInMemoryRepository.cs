using Hangman.Backend.DataAccess;
using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Repositories
{
    public class GameInMemoryRepository : IGameRepository
    {
        public Task<IEnumerable<GameEntity>> GetAll()
        {
            return Task.FromResult(StaticData.Games.AsEnumerable());
        }

        public Task<GameEntity?> Get(int id)
        {
            return Task.FromResult(StaticData.Games.SingleOrDefault(x => x.Id == id));
        }

        public Task<GameEntity> Create(GameEntity newGame)
        {
            newGame.Id = StaticData.Games.Any() ? StaticData.Games.Max(x => x.Id) + 1 : 1;
            newGame.Player = StaticData.Players.Single(x => x.Id == newGame.PlayerId);
            StaticData.Games.Add(newGame);
            return Task.FromResult(newGame);
        }

        public Task<GameEntity> Update(GameEntity updatedGame)
        {
            var game = StaticData.Games.SingleOrDefault(x => x.Id == updatedGame.Id);
            game.GuessedLetters = updatedGame.GuessedLetters;
            game.State = updatedGame.State;
            game.NrOfIncorrectGuesses = updatedGame.NrOfIncorrectGuesses;

            return Task.FromResult(game);
        }
    }
}