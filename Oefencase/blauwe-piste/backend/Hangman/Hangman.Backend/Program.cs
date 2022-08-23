using Hangman.Backend.DataAccess;
using Hangman.Backend.Repositories;
using Hangman.Backend.Services;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<HangmanDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("HangmanDbContext"));
}, ServiceLifetime.Transient);

builder.Services.AddTransient<IGameService, GameService>();

builder.Services.AddTransient<IGameRepository, GameDbRepository>();
builder.Services.AddTransient<IPlayerRepository, PlayerDbRepository>();
builder.Services.AddTransient<IWordRepository, WordDbRepository>();

//builder.Services.AddTransient<IGameRepository, GameInMemoryRepository>();
//builder.Services.AddTransient<IPlayerRepository, PlayerInMemoryRepository>();
//builder.Services.AddTransient<IWordRepository, WordInMemoryRepository>();

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("frontend");

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
