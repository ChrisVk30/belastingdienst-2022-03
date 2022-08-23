using Hangman.Backend.Entities;

namespace Hangman.Backend.Repositories
{
    public interface IGameRepository
    {
        Task<IEnumerable<GameEntity>> GetAll();
        Task<GameEntity?> Get(int id);
        Task<GameEntity> Create(GameEntity newGame);
        Task<GameEntity> Update(GameEntity updatedGame);
    }
}