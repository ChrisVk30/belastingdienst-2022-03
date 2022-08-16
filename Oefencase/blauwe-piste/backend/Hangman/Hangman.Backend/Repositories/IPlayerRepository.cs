using Hangman.Backend.Entities;

namespace Hangman.Backend.Repositories
{
    public interface IPlayerRepository
    {
        Task<PlayerEntity> Create(string name);
        Task<PlayerEntity> Get(string name);
    }
}