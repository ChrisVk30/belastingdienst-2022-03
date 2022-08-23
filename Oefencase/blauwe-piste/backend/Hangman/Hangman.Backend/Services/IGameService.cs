using Hangman.Backend.Entities;

namespace Hangman.Backend.Services
{
	public interface IGameService
	{
		bool HasWordBeenGuessed(GameEntity game);
		(bool, string) IsValidGuess(GameEntity game, string letter);
	}
}