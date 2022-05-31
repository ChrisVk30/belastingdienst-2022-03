# Notes Razortraining

## .NET en .NET Core geschiedenis

.NET Core 1.0
.NET Core 1.1
.NET Core 2.0
.NET Core 2.1
.NET Core 2.2
.NET Core 3.0

=>

.NET 5

after:2016

ASP.NET Core
- 2016
- Performance
- Deployment
- API

.NET Core
- 2016
- Linux/MacOS
- SQL Server op Linux
- 


.NET Framework
- 2001
- Windows
- Visual Studio + Windows + SQL Server

ASP.NET
- Webserver: IIS

ASP.NET MVC

## HTTP

### Formulierdata submitten naar server

HTTP-request

x-form-urlencoded

`brand=Samsung&size=485&price=24949`

### HTTP-statuscodessen

2xx - success
- 200 OK
- 201 Created
- 204 No Content  (DELETE)

3xx  REDIRECTS
- 301/302  permanent/temporary

4xx -  client error
- 400 Bad Request
- 401/403 Forbidden/Unauthorized
- 404 Not Found
- 405 Method Not Allowed  DELETE
- 418 I'm a teapot

5xx - server error
- 500 - Internal Server Error
- 502 Gateway

## HTML

HTML
- Structuur
- Inhoud

CSS
- Opmaak
- Kleurtjes animaties

JavaScript
- Interactie
- Gedrag

```html
<element>inhoud</element>
```

```html
h1
h2
h6
p
```

doelgroepen van een webpagina:

- "mensen met prima zicht"
- slechtzienden
- blinden
- zoekmachines



HTML 1.0 - 1991
     +
     2
     3
     4
     - 4.01 - 1998

HTML5 - 2013

`data-*` attributen voor custom metadata

### a11y

De meeste HTML-elementen zijn betekenisvol (semantisch), met twee uitzonderingen:

```html
<div></div>
<span></span>
```

Betekenisvol betekent meestal ook 👍 voor a11y.

* a11y - accessibility
* Web Components moeten extra moeite doen voor a11y:
	```html
	<jouw-sexy-element></jouw-sexy-element>
	```
  - WAI-Accessible Rich Internet Applications
  - WCAG - Web Content Accessibility Guidelines


### "deprecated" elementen

```html
<b> - bold
<i> - italic
<u> - underline

<center>
<font>
<blink>
```

## Dependency injection

- het injecteren van dependencies
- het is een vorm van Inversion of Control
- uitwisselbaar

low coupling, high cohesion




## Unittesten

Verschillende soorten geautomatiseerd testen:

- unittests
- integratietests
- end-to-end tests (UI tests)

overige testen:
- handmatige testen
- penetration testing


**MENING**

wanneer je in JP's ogen niet hoeft te unittesten:

- als je de stagiaire/tester alle tests laat schrijven
- als je x% code coverage probeert te halen
- als je project < 6 maanden duurt. let wel:

    "niets is zo permanent als een tijdelijke oplossing"

Verbeter de kwaliteit van je tests met [mutation testing](https://stryker-mutator.io/).

## EF Core

=> library/framework
=> Object-Relational Mapper
   - SQL
   - EF 6
   - [Dapper](https://github.com/DapperLib/Dapper) (beter qua performance)

NoSQL - MongoDB Cassandra Cosmos

* `DbContext` voor database
* `DbSet` voor tabel
* Migrations om database up-/downgrades uit te voeren

## Unittesten

- zo klein mogelijk stukje code testen
- mock dependencies weg

mockframeworks
- Moq
- NSubstitute


- mocha (javascript / node.js)
  - is een testrunner, niet voor mocking


.NET-testframeworks:
- MSTest
- xunit
- nunit

De verschillen? Subtiele detailsdingetjes.

```cs
// MSTest
[ExpectedException(ArgumentException)]
public void TestIets()
{

}

// xunit
public void XunitTest()
{
	Assert.Throws<ArgumentException>(() => page.Doe());
}
```

```cs
Assert.Equals("hoi", "hoi");
```
```
MSTest: "hoi" does not equal "hoi"

xunit: Two strings don't match
"hoi"
"hoi"
```


- integratietesten
  - "het grotere geheel"
  - database betrekken bij je test
  - API test
  - component

- UI test / end-to-end (E2E) testen
- handmatig testen


Kwaliteit checken van je tests: **[mutation testing]((https://stryker-mutator.io/))**
```cs
if (x == 24)
{
	...
}
```

X-Men
William Stryker

### Test-driven development

- Eerste een test
- Dan de code

1. Schrijf een test
2. Run de test en zie dat hij faalt
3. Schrijf code
4. Run de test en zie dat hij slaagt
5. Refactor

Repeat.

RED-GREEN-REFACTOR











