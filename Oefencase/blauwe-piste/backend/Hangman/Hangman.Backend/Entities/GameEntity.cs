﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Backend.Entities
{
    public class GameEntity
    {
        public int Id { get; set; }

        public int PlayerId { get; set; }

        public PlayerEntity Player { get; set; }

    }
}