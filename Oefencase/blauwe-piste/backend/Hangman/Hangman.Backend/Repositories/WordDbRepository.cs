using Hangman.Backend.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Hangman.Backend.Entities;

namespace Hangman.Backend.Repositories
{
	public class WordDbRepository : IWordRepository
	{
		private readonly HangmanDbContext _context;
		public WordDbRepository(HangmanDbContext context)
		{
			_context = context;
		}

		public async Task<WordEntity> GetRandomWord()
		{
			return _context.Words.FromSqlRaw("EXECUTE csp_getRandomWord_s01").AsEnumerable<WordEntity>().Single();
		}
	}
}
