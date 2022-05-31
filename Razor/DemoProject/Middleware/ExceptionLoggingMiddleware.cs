using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Middleware
{
    public class ExceptionLoggingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                var msg = $"[{DateTime.Now.ToShortTimeString()}] Exception: {ex.Message}{Environment.NewLine}{ex.StackTrace}{Environment.NewLine}{Environment.NewLine}";
                File.AppendAllText(@"C:\logs\errors.log", msg);
                throw;
            }
        }
    }

    public static class ExceptionLoggingMiddlewareExtensions
    {
        public static IApplicationBuilder UseExceptionLoggingMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<ExceptionLoggingMiddleware>();
        }
    }
}
