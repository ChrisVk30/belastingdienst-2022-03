using Hangman.Backend.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddTransient<IGameRepository, GameRepository>();
builder.Services.AddTransient<IPlayerRepository, PlayerRepository>();

builder.Services.AddControllers();

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
