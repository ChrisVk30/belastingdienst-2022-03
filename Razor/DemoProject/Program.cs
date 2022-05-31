using DemoProject.DataAccess;
using DemoProject.Middleware;
using DemoProject.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// grote bouwblokken & dependency injection

builder.Services.AddDbContext<MediaContext>(options =>
{
	options.UseSqlServer("Server=.\\SQLEXPRESS; Database=mediadb; Integrated Security=true;");
});

builder.Services.AddRazorPages();

// every time a new instance
// uses the most memory
// no side effects
//builder.Services.AddTransient<ITelevisionRepository, TelevisionRepository>();
builder.Services.AddTransient<ITelevisionRepository, TelevisionDatabaseRepository>();

builder.Services.AddSingleton<ExceptionLoggingMiddleware>();

//builder.Services.AddScoped(); // one instance per request

//builder.Services.AddSingleton(); // one instance to rule them all

var app = builder.Build();

app.UseDeveloperExceptionPage();

// note that there are much better logging solutions
app.UseExceptionLoggingMiddleware(); // extension method
									 // log4j
									 // log4net
									 // Serilog

app.UseStaticFiles();

//app.UseMiddleware<ExceptionLoggingMiddleware>();


// wat er met ieder request moet gebeuren
// middleware

app.MapRazorPages();


app.Run();
