var builder = WebApplication.CreateBuilder(args);

// grote bouwblokken

builder.Services.AddRazorPages();

var app = builder.Build();

// wat er met ieder request moet gebeuren

app.MapRazorPages();

app.Run();
