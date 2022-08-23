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
	public class WordInMemoryRepository : IWordRepository
	{
		public Task<WordEntity> GetRandomWord()
		{
			return Task.FromResult(StaticData.Words.OrderBy(x => Guid.NewGuid()).First());
		}
	}
}
