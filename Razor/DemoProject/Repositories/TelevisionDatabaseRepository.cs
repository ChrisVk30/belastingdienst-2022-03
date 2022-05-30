using DemoProject.DataAccess;
using DemoProject.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Repositories
{
	public class TelevisionDatabaseRepository : ITelevisionRepository
	{
		private MediaContext _context;
		public TelevisionDatabaseRepository(MediaContext context)
		{
			_context = context;
		}

		public async Task<IEnumerable<TelevisionEntity>> GetAll()
		{
			return await _context.Televisions.ToListAsync();
		}

		public async Task<TelevisionEntity> Add(TelevisionEntity newTelevision)
		{
			_context.Televisions.Add(newTelevision);
			await _context.SaveChangesAsync();
			return newTelevision;
		}
	}
}
