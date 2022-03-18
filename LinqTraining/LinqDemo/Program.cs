// See https://aka.ms/new-console-template for more information
using LinqDemo;


// Language INtegrated Query
var artists = new List<Artist>
{
    new Artist { Name = "Blink 182", Location = "USA", NrOfTracksReleased = 60  },
    new Artist { Name = "Pearl Jam", Location = "USA", NrOfTracksReleased = 95 },
    new Artist { Name = "James Blunt", Location = "London", NrOfTracksReleased = 5 },
    new Artist { Name = "Ed Sheeran", Location = "Galway", NrOfTracksReleased = 80 },
    new Artist { Name = "P!nk", Location = "USA", NrOfTracksReleased = 110 },
    new Artist { Name = "Taking Back Sunday", Location = "New Jersey", NrOfTracksReleased = 11 },
    new Artist { Name = "Taking Back Sunday", Location = "New Hampshire", NrOfTracksReleased = 9 },
    new Artist { Name = "Taking Back Sunday", Location = "New York", NrOfTracksReleased = 5 },
    new Artist { Name = "Taking Back Sunday", Location = "New Mexico", NrOfTracksReleased = 20 },
    new Artist { Name = "Good Kid", Location = "USA", NrOfTracksReleased = 32 },
    new Artist { Name = "K.Flay", Location = "California", NrOfTracksReleased = 98 }
};
var movies = new List<Movie>
{
    new Movie { Title = "Pulp Fiction", ShotLocation = "USA" },
    new Movie { Title = "Harry Potter", ShotLocation = "England" },
    new Movie { Title = "The Hobbit", ShotLocation = "New Zealand" },
    new Movie { Title = "The Shawshank Redemption", ShotLocation = "USA" }
};

//var artistsAndMovies = from a in artists
//                       join m in movies on a.Location equals m.ShotLocation
//                       select new
//                       {
//                           a.Name,
//                           m.Title,
//                           a.Location
//                       };
//foreach (var am in artistsAndMovies)
//{
//    Console.WriteLine($"artiest {am.Name} is net als {am.Title} op locatie {am.Location} geweest");
//}










Console.WriteLine("==============");


// valkuilen: delayed execution
var filter = "P";

//var filteredArtists = (from a in artists
//                       where a.Name.StartsWith(filter, StringComparison.OrdinalIgnoreCase)
//                       select a).ToArray();

//var filteredArtists = from a in artists
//                      where a.Name.StartsWith(filter)
//                      select a;

var filteredArtists = artists.Where(x => x.Name.StartsWith(filter)).ToArray();

//filter = "P";
artists.Add(new Artist { Name = "Pink Floyd", NrOfTracksReleased = 2848 });

foreach (var artist in filteredArtists)
{
    Console.WriteLine($"{artist.Name} heeft {artist.NrOfTracksReleased} tracks gereleased");
}










//var filteredArtists = artists.Skip(2).Take(3);
//var filteredArtists = artists.OrderByDescending(x => x.Location);

// anonymous objects
//var mijnObj = new
//{
//    Ding = "Hoi",
//    Iets = 8494
//};


//var filteredArtists = from a in artists
//                      //where a.Name.StartsWith("P") && a.NrOfTracksReleased < 100
//                      orderby a.Name, a.NrOfTracksReleased descending
//                      select a;

//foreach (var artist in filteredArtists)
//{
//    Console.WriteLine($"{artist.Name} heeft {artist.NrOfTracksReleased} tracks gereleased");
//}

//Console.WriteLine("============");

//var locations = from a
//                      in artists
//                group a by a.Location into groupedArtist
//                select new GroupedLocation
//                {
//                    Location = groupedArtist.Key,
//                    TotalNrOfTracksReleased = groupedArtist.Sum(x => x.NrOfTracksReleased)
//                };


//foreach (var l in locations)
//{
//    Console.WriteLine($"In {l.Location} zijn in totaal {l.TotalNrOfTracksReleased} tracks uitgebracht");
//}


// LINQ extension method
// IEnumerable<>
// .Where()
// .Sum()
// .First()
// .Last()
// .Single()
// .Max()
// .Min()
// .Skip()
// .Take()
// .OrderBy()
// .Join()
// .GroupBy()




Console.WriteLine("hallo daar".DoSomethingAwesome());