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
