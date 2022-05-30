using DemoProject.Entities;

namespace DemoProject.Repositories
{
    public interface ITelevisionRepository
    {
        Task<IEnumerable<TelevisionEntity>> GetAll();

        Task<TelevisionEntity> Add(TelevisionEntity newTelevision);
    }
}