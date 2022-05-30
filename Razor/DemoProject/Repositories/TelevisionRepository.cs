using DemoProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Repositories
{
    public class TelevisionRepository : ITelevisionRepository
    {
        private static List<TelevisionEntity> s_televisions { get; set; } = new()
        {
            new TelevisionEntity()
            {
                Id = 4,
                Brand = "Samsung",
                Size = 65M,
                Price = 1600M
            },
            new TelevisionEntity()
            {
                Id = 8,
                Brand = "LG",
                Size = 79M,
                Price = 3600M
            },
            new TelevisionEntity()
            {
                Id = 16,
                Brand = "Philips",
                Size = 42M,
                Price = 380M
            }
        };

        public async Task<IEnumerable<TelevisionEntity>> GetAll()
        {
            return s_televisions;
        }

        public async Task<TelevisionEntity> Add(TelevisionEntity newTelevision)
        {
            newTelevision.Id = s_televisions.Max(x => x.Id) + 1;
            s_televisions.Add(newTelevision);
            return newTelevision; // return updated entity
        }
    }
}
