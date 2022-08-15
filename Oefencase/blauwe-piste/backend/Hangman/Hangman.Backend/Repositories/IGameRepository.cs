using Hangman.Backend.Entities;

namespace Hangman.Backend.Repositories
{
    public interface IGameRepository
    {
        Task<GameEntity> Create();
        Task<GameEntity> Get(int id);
        Task<IEnumerable<GameEntity>> GetAll();
    }
}