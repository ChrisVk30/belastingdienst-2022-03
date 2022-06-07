using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string name, string content)
        {
            await Clients.All.SendAsync("say", name, content);
        }
    }
}
