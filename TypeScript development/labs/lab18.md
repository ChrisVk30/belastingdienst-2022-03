# Lab 18 - Using typed-html

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the _labsSolutions_ directory.

**Note:** Make sure that typescript compiler is running in watch mode (`npx tsc -b -w`).

## Exercise 1 - setup TypedHtml

1. Install typed-html: `npm i typed-html`
1. Configure your client tsc compiler for JSX support. Add the following configuration:
   ```json
   {
     "jsx": "react",
     "jsxFactory": "typedHtml.createElement"
   }
   ```
1. Update your the file extension of `BankAccountsTableComponent.ts` to `.tsx`. In that file, import typedHtml `import * as typedHtml from '../../node_modules/typed-html/dist/elements.js';`
1. Make sure your `BankServer` also serves files from the `node_modules` directory. For example add this line:
   ```ts
   this.app.use('/node_modules', express.static('node_modules'));
   ```
1. Try it out. You should be able to use html tags from inside the `BankAccountsTableComponent.tsx` file.

## Exercise 2 - Replace string template in the BankAccountsTableComponent

Change the implementation of the `updateTable()` method. It should now use the XML-like syntax instead of a string to define the template.

## Exercise 3 - Replace string template in the AddCustomerComponent - if time permits

Now also change the implementation of the `render()` method in "AddCustomerComponent.ts". Don't forget to rename it to "*.tsx".
