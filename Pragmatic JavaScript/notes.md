# Pragmatic JavaScript

## Keuze voor configfiles

.json vs .js?

**.json**
* Vaak betere code completion
* JSON mag geen comments bevatten, dus toelichting geven op een setting kan niet even makkelijk in het bestand zelf. Hopelijk wanneer [JSON5](https://json5.org/) volledig doorbreekt wel.

**.js**
* Vaak mindere code completion
* Mag wel comments bevatten

## Unittesten

Unittesten:
- mocha (test runner)
  - reporter
- chai (assertion library)
- sinon (mocken)

- jasmine - Angular
- testing library
- jest (facebook)



Mocha/Chai/Sinon is niet zozeer een heilige best practice voor testen op echte projecten. De combinatie van deze tools laat zien hoe npm packages met elkaar integreren (soms lastig), van de packages zelf tot aan integratie met TypeScript, Istanbul en Stryker.

### Test-driven development (nogmaals)

1. Schrijf een test
2. Run de test en zie dat hij faalt
3. Schrijf code (implementeer)
4. Run de test en zie dat hij slaagt
5. Refactor

Repeat.

RED-GREEN-REFACTOR


### Mutation testing

- product placement (thanks Rik!)

```ts
// mutant
if (x < -4) {
	// ...
}
```

William Stryker
- X-Men

## JS-backends

- Node.js
- Deno
  - TypeScript
  - moderne API - promises
  - secure by default
	deno run --allow-read --allow-net
  - imports en daarmee decentralisatie: import { fs } from 'https://deno.land/x/fs';
    - geen node_modules
- bun.sh
  - node_modules


Node.js - Ryan Dahl => Joyent => OpenJS Foundation
npm - iemand anders => Microsoft
GitHub - Microsoft

gecentraliseerd
gedecentraliseerde




waarom een JS-backend?
- zodat frontendmensen ook wat backend kunnen doen
- compatibility - draait op elk OS - PHP Python .NET Java
- code sharing - authenticatielogica / validatielogica
- C10k problem - event loop - gewoon een nieuwe thread voor iedere request

	async/await
- kosten
- dat dat de kennis is die in huis is



.NET
- Linux
- VS Code
- SQL Server voor Linux




.NET
- Windows
- Visual Studio $$$
- SQL Server
- Azure
- Docker => Linux



### Backend web frameworks

- express
- hapi
- next.js - React
- Fresh
- nest.js - Angular
- nuxt.js - Vue

static site rendering

Server Side Rendering
- hydration


over het algemeen dwingt een framework af dat je op een bepaalde manier moet werken. (bouwpakket)
- Angular

libraries (hammer en een schroevendraaier)
- jQuery
- async
- lodash
