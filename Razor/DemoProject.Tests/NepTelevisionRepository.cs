using DemoProject.Entities;
using DemoProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Tests
{
    public class NepTelevisionRepository : ITelevisionRepository
    {
        public bool HasAddBeenCalled { get; set; }
        public bool HasGetAllBeenCalled { get; set; }

        public async Task<TelevisionEntity> Add(TelevisionEntity newTelevision)
        {
            HasAddBeenCalled = true;
            return null;
        }

        public async Task<IEnumerable<TelevisionEntity>> GetAll()
        {
            HasGetAllBeenCalled = true;
            return null;
        }
    }
}
