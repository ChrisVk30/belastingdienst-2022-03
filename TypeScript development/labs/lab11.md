# Lab 11 - Add client side code

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

In this lab, we'll first setup the code with project references and ES module syntax to allow for sharing code between client and server.

Next, we'll create a banking website.

## Exercise 1 - Setup project references

Setup your project to use project references. Your project structure should end up like this:

```
src
├── client
│   └── tsconfig.json
├── shared
│   └── tsconfig.json
└── server
    └── tsconfig.json
tsconfig.settings.json
tsconfig.json
```

In the `tsconfig.settings.json` you can put all the shared compiler options. It should at least have these settings:

```js
// tsconfig.settings.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "composite": true,
    "declarationMap": true,
    "declaration": true,
  }
}
```

The specific `tsconfig.json` files should extend the `tsconfig.settings.json` file. They should also declare the `outDir` property to make sure code is outputted in the `dist` directory. Finally, both "client" and "server" should reference the "shared" project. This is an example of the server/tsconfig.json file. You can base the "client" and "shared" tsconfig files on it.

```js
// src/server/tsconfig.json
{
  "extends": "../../tsconfig.settings.json",
  "compilerOptions": {
    "outDir": "../../dist/server"
  },
  "references": [
    {
      "path": "../shared"
    }
  ]
}
```

The root tsconfig.json file should not refer to any ".ts" files directly. Instead, it only needs to reference all projects. The file looks like this:

```js
// tsconfig.json
{
  "files": [],
  "references": [
    {
      "path": "src/client",
    },
    {
      "path": "src/shared",
    },
    {
      "path": "src/server",
    },
  ]
}
```

Create a dummy `client.ts` in the "client" project. It should contain the following code: 

```ts
import { BankAccount } from '../shared/BankAccount.js'
console.log('Hello ', BankAccount.name);
```

Make sure the output after `npx tsc -b` looks like this:

```
dist
├── client
│   ├── *.js.map
│   ├── *.d.ts
│   ├── *.js
│   └── tsconfig.tsbuildinfo
├── shared
│   ├── *.js.map
│   ├── *.d.ts
│   ├── *.js
│   └── tsconfig.tsbuildinfo
└── server
    ├── *.js.map
    ├── *.d.ts
    ├── *.js
    └── tsconfig.tsbuildinfo
```

## Exercise 2 - Create and serve the client app

In this exercise we'll let our webserver also serve static files. We will load an html page in a browser which will function as our banking application.

Since all projects are emitting ES module code, we can easily share code between both NodeJS and the browser. Note that, in a real life scenario, you would probably be using a bundler like webpack, rollup or parcel to package your client code.

1. Copy the `static` directory (`lab11/static`) right **next to** your `src` directory. 
1. Alter your `src/server/BankServer.ts` file. Make sure it can serve client files and TS sources can be served. You can do this by registering these handlers in your express app.
    ```ts
    this.app.use(express.static('static'));
    this.app.use(express.static('dist'));
    this.app.use('/src', express.static('src'));
    ```
1. Now run your webserver (`dist/server/main.js`). Open a browser and go to http://localhost:8080. The index.html file should be visible in your browser.
1. Open the console in your browser (`F12` tools). The log message "Hello BankAccount" should be visible.
1. 🥧 congrats! You've got things up and running. 

Notice that you are able to debug your _TypeScript_ source code in the browser (with the `F12` tools). This is the magic of using source maps. _Source maps are useful for testing, but you would turn this off for a production application._
