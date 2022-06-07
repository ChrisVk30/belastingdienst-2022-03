using DemoProject.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Apis
{
    [Route("api/state")]
    public class StateApi : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;

        public StateApi(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [Route("cache")]
        public string Cache()
        {
            var nu = _memoryCache.GetOrCreate("nu", entry =>
            {
                entry.SlidingExpiration = TimeSpan.FromSeconds(3);
                return DateTime.Now;
            });

            return $"Cache: {nu.ToLongTimeString()}";
        }

        [Route("session")]
        public string Session()
        {
            if (!HttpContext.Session.Keys.Contains("nu"))
            {
                HttpContext.Session.Set("nu", DateTime.Now);
            }

            var nu = HttpContext.Session.Get<DateTime>("nu");
            return $"Session: {nu.ToLongTimeString()}";
        }
    }
}
