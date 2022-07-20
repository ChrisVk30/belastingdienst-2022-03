# Pragmatic JavaScript-oefeningen

## Oefening 1: maak een Bank-applicatie

Realiseer een Bank-applicatie **middels TypeScript en Test-driven development**.

- De Bank beheert BankAccounts.
- Er zijn verschillende soorten accounts: Checking en Savings.
- Ik wil geld kunnen overmaken van account A naar B.
  * Bij een SavingsAccount mag men niet rood staan.
- Bij een account wil ik een accountant kunnen koppelen. Als er een hoge afschrijving wordt gedaan, dan moet deze accountant op de hoogte worden gebracht.

```sh
1. npm install typescript --save-dev
2. npx tsc --init
3. Configureer je tsconfig verder af
4. npx tsc
```

**Qua testen**

Gebruik gerust mocha/chai/sinon, maar testing library of Jest mag ook zeker.
```sh
# mocha/chai/sinon installeren
npm install ts-mocha mocha chai sinon @types/mocha @types/chai @types/sinon --save-dev
```
en in je package.json:
```json
"scripts": {
  "test": "ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts"
},
```
Uit te voeren met:
```sh
npm test
```

---

## Oefening 2: integreer code coverage en Stryker in je applicatie

Uitgaande van een setup met mocha, chai en sinon:

**Code coverage**

```sh
npm install nyc --save-dev
```
En dan `nyc` voor je testcommando plakken.

```json
"scripts": {
  "test": "ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts",
  "test-with-coverage": "nyc --reporter html ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts"
},
```

**Stryker**

```sh
npm install --global styker-cli
stryker init
# mogelijk een kleine aanpassing in de config (zie als voorbeeld eventueel mijne)
stryker run
```

Hang je project ook in een git repo. Stryker leest aan de hand van je git-informatie uit welke bestanden er in je project zitten.

## Oefening 2: integreer ESLint bij jullie Bankapplicatie

```sh
- npm install --save-dev eslint
- npx eslint --init  => airbnb, google, standard
- npx eslint src/bestand.ts
```

En installeer ook vooral de extensie ESLint voor VS Code.

Uitwerking van de bankoefening staat ook in de Pragmatic JavaScript-folder.

---

## Oefening 3: bundlen

Maak een kleine webapplicatie met een tabelletje met data en een formulier om nieuwe items toe te voegen aan die tabel. Neem een logo op bovenaan de pagina en style het formulier een beetje leuk.

* bundle deze webapplicatie met een bundler naar keuze: webpack, Vite, Parcel, ...
* je mag je kennis over HTML/CSS/JS/DOM API even opnieuw toepassen hier als je wil. Je mag ook mijn webapp als starter pakken.

---

## Oefening 4: een backend

* Serveer de pagina met de tabel inclusief CSS en JavaScript als static files.
* Creëer een REST API om data:
  - van op te halen (GET)
  - toe te voegen (POST)

Je mag zelf kiezen of je daar Express.js, Nest.js of iets anders voor wil gebruiken.

Tijd over? Koppel de pagina en de REST API met AJAX voor zowel het ophalen als toevoegen van items.

---

## Oefening 5: een frontend

Realiseer de pagina van eerste (tabel met form) met Svelte of Vue. Roep je backend APIs aan om de data op te halen en nieuwe data toe te voegen.

**Svelte**

* Ga naar https://svelte.dev/
* Klik op REPL
* Klik op download
* Pak zip ergens uit 
* Installeer dependencies
  ```sh
  npm install
  npm run dev
  ```

**Vue**

```sh
npm init vue@latest
```

En volg de stappen.

