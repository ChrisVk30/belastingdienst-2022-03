using Hangman.Backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.DataAccess
{
    public static class StaticData
    {
        static StaticData()
        {
            Players.ForEach(player =>
            {
                player.Games.ForEach(game =>
                {
                    Games.Single(x => x.Id == game.Id).Player = player;
                    Games.Single(x => x.Id == game.Id).PlayerId = player.Id;
                });
            });
        }

        public static List<GameEntity> Games = new()
        {
            new()
            {
                Id = 4,
                GuessedLetters = "BDPL",
                NrOfIncorrectGuesses = 2,
                State = GameState.Unsolved,
                WordToGuess = "PLEASE",
                Start = new DateTime(2022, 8, 22, 14, 10, 5),
                End = new DateTime(2022, 8, 22, 14, 15, 8)
            },
            new()
            {
                Id = 8,
                GuessedLetters = "SETM",
                NrOfIncorrectGuesses = 1,
                State = GameState.InProgress,
                WordToGuess = "SMART",
                Start = new DateTime(2022, 8, 22, 16, 46, 49)
            }
        };

        public static List<PlayerEntity> Players = new()
        {
            new()
            {
                Id = 12,
                Name = "Frank",
                NrOfSolvedGames = 8,
                NrOfUnsolvedGames = 15,
                Games = new List<GameEntity> { Games[1] }
            },
            new()
            {
                Id = 75,
                Name = "Fred",
                NrOfSolvedGames = 22,
                NrOfUnsolvedGames = 20,
                Games = new List<GameEntity> { Games[0] }
            }
        };

        public static List<WordEntity> Words = new()
        {
            new() { Id = 4, Word = "MINIMUMTEMPERATUREN" },
            new() { Id = 8, Word = "WEEGSCHAALBALANS" },
            new() { Id = 15, Word = "KLOKKENLUIDER" },
            new() { Id = 16, Word = "CHIPSZAKKENVERPULVERAAR" },
            new() { Id = 23, Word = "TELEFOONHOESJE" }
        };
    }
}
