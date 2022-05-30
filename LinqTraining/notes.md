# Notes

Dit statement werken we naartoe:

```cs
products.Where(x => x.Price > 50)
```

## Delegates & events

delegates - methodes - mini-interface (events)

Meerdere soorten delegates:

* `Predicate<T>` - returnt een boolean
* `Func<T, int>` - returnwaarde in te stellen
* `Action<T>` - geen returnwaarde, "gewoon uitvoeren"

events
- losgekoppelde notificaties
- publish/subcribe

```cs
webapp.UnhandledException += ...
button.Click += ...
```

De lambda, `() => { ... }`, is een korte notatie om een delegate te definiëren.
* `()` kan weg worden gelaten bij 1 parameter
* `{}` kunnen weg worden gelaten als de body slechts 1 statement bevat. Dit wordt dan ook meteen de returnwaarde.

## Generics

```cs
class MijnGenericClass<T> where T : struct
{
	// ...
}
```

Waar je generics tegenkomt:

```cs
// security bij ASP.NET Core
services.AddIdentity<User, Role>

// ASP.NET Core middleware
app.UseMiddleware<JouwEigenLogger>();

// dependency injection
services.AddTransient<IWhatever, Whatever>();
```

## Collections

* `IEnumerable<T>`: om door een collectie heen te kunnen lopen. Biedt een `.MoveNext()` en een `.Current`
* `ICollection<T>`: biedt een `.Count` en meer interactie op een collectie met `.Add()` en `.Remove()`
* `IList<T>`: biedt nog iets meer interactie op een collectie met `.InsertAt()`

`IEnumerable<T>` wordt veruit het meest gebruikt, gevolgd door `ICollection<T>`. `IList<T>` wordt al wat zeldzamer, die functionaliteit is minder vaak expliciet nodig, waar de `.Count` van een `ICollection<T>` een stuk vaker relevant is.

## Overig

* KISS: Keep It Simple, Stupid
* SOLID principles
* 4 pilaren van OO: abstractie, encapsulatie, inheritance, polymorphisme
