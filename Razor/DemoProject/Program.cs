using DemoProject.DataAccess;
using DemoProject.Entities;
using DemoProject.Middleware;
using DemoProject.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// grote bouwblokken & dependency injection

builder.Services.AddDbContext<MediaContext>(options =>
{
	options.UseSqlServer("Server=.\\SQLEXPRESS; Database=mediadb; Integrated Security=true;");
});

builder.Services.AddIdentity<MediaUser, IdentityRole>().AddEntityFrameworkStores<MediaContext>();

builder.Services.AddSwaggerGen(options =>
{
	options.SwaggerDoc("v1", new OpenApiInfo
	{
		Title = "Nog steeds mijn beste API",
		Version = "v1"
	});
});

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
	options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
});

//	.AddJsonOptions(options =>
//{
//	//options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
//	/*options.JsonSerializerOptions.Converters.Add(*/
//	// datums en tijdzones
//});
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

app.UseAuthentication(); // leest authenticatiecookie uit en stelt dan in: User, Request.IsAuthenticated

app.UseSwagger();

if (app.Environment.IsDevelopment())
{
	app.UseSwaggerUI(options =>
	{
		options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
	});
}

app.UseStaticFiles();
//app.UseMiddleware<ExceptionLoggingMiddleware>();


// wat er met ieder request moet gebeuren
// middleware

app.MapControllers();
// : ControllerBase
// suffix Controller
// Controllers/

app.MapRazorPages();


app.Run();
