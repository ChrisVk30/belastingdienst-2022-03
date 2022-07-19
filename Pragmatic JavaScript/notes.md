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