# Lab 9 - Structuring code

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the _labsSolutions_ folder.

In this lab, we will split our code into multiple files.

## Exercise 1 - Split your code into multiple files.

Split all classes out into it's own files. Use `modules` with `import` and `export` to make sure that everything works.

1. Open your `tsconfig.json` and configure `ES2020` as your module syntax.
   - Be sure you use `.js` as a postfix in your `import` statements.
2. Open your `package.json` file and set `"type": "module"`.
3. Now move code you intent to reuse across the client and server side code in shared folder
   - Create a directory `src/shared`.
   - Add `Customer` class to `src/shared/Customer.ts`
   - Add `Iban` class to `src/shared/Iban.ts`
   - Add `BankAccount` class to `src/shared/BankAccount.ts`
     - Remove the call to the auditLog for now.
   - Add `BankConfig` interface to `src/shared/BankConfig.ts`.
4. Move server specific code to a src/server directory
   - Create a directory `src/server`
   - Add the `Bank` class to `src/server/Bank.ts`.
   - Add the `auditLog` function to `src/server/auditLog.ts`.
   - Add the remaining code from the `main.ts` file to `src/server/main.ts`
5. Make sure you your code compiles without errors.

Run the `src/server/main.js` file to make sure it still works as expected.

If you're using a `launch.json` file, make sure it runs your new `dist/src/server/main.js` file:

```diff
// .vscode/launch.json
{
   "version": "0.2.0",
   "configurations": [
      {
         "type": "node",
         "request": "launch",
         "name": "Launch BankServer",
-         "program": "${workspaceFolder}/dist/main.js",
+         "program": "${workspaceFolder}/dist/server/main.js",
         "outFiles": [
            "${workspaceFolder}/dist/**/*.js"
         ]
      }
   ]
},
```

## Exercise 2 - Create a shared index.ts - If time permits

Create an `index.ts` file inside of the `src/shared` directory.
Make sure to re-export all dependencies from the shared module.
Use that index file to import from.

This way you can import multiple classes directly from the shared module, without knowing exactly where the file lives.

For example:

```ts
import { BankAccount, BankConfig, Customer } from '../shared/index.js';
```

The `index.ts` file can be seen as the "public api", while other files from `shared` can be viewed as the internal API (like C#'s `internal` or Java's modules). 

Make sure you your code compiles without errors. Run the `src/server/main.js` file to make sure it still works as expected.
