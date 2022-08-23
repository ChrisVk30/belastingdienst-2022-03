using Hangman.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.DataAccess
{
	public class HangmanDbContext : DbContext
	{
		public DbSet<GameEntity> Games { get; set; }

		public DbSet<PlayerEntity> Players { get; set; }

		public DbSet<WordEntity> Words { get; set; }

		public HangmanDbContext(DbContextOptions options) : base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			// more of these?
			modelBuilder.Entity<WordEntity>().HasIndex(x => x.Word).IsUnique();
		}
	}
}
