# Lab 13 - Advanced use cases

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

**Note:** Make sure that typescript compiler is running in watch mode (`npx tsc -b -w`).

## Exercise 1 - Exhaustiveness checking for languages

In the `Bank` class, we've implemented a welcome message based on the language. 

Let's now use exhaustiveness checking to make sure that we have a welcome message in all languages. 

Verify that your exhaustiveness check works. Add a language to the `Language` union type, for example `'de'`. It should result in a compile error.