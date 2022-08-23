using Hangman.Backend.Entities;

namespace Hangman.Backend.Repositories
{
	public interface IWordRepository
	{
		Task<WordEntity> GetRandomWord();
	}
}