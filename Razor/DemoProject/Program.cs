using DemoProject.DataAccess;
using DemoProject.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// grote bouwblokken & dependency injection

builder.Services.AddDbContext<MediaContext>(options =>
{
	options.UseSqlServer("Server=.; Database=mediadb; Integrated Security=true;");
});

builder.Services.AddRazorPages();

// every time a new instance
// uses the most memory
// no side effects
//builder.Services.AddTransient<ITelevisionRepository, TelevisionRepository>();
builder.Services.AddTransient<ITelevisionRepository, TelevisionDatabaseRepository>();

//builder.Services.AddScoped(); // one instance per request

//builder.Services.AddSingleton(); // one instance to rule them all

var app = builder.Build();

// wat er met ieder request moet gebeuren

app.MapRazorPages();

app.Run();
