using Hangman.Backend.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Controllers
{
    [Route("api/player")]
    
    public class PlayerController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<PlayerEntity>> GetAll()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<string> Post([FromForm] string name)
        {
            return "yes! => " + name;
        }
    }
}
