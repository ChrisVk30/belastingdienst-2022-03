# Lab 5 - Create bank helper functions

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

Work in the `main.ts` file.

## Exercise 1 - Format customer names

In our bank we will need to format customer names.

1. Create that function. The shape looks like this:
   ```ts
   function formatName(firstName: string, lastName: string, insertion: string): string {
       // TODO: Implement
   }
   ```
1. Test that it works: `formatName('Pascalle', 'Vries', 'de')` should result in `'Pascalle de Vries'`.
1. Change `preposition` to make sure it is optional. `formatName('Foo', 'Bar')` should result in `'Foo Bar'`.

## Exercise 2 - Generate IBAN account numbers

In the main.ts file, create a `generateIban` function. It should generate a new random [IBAN account number](https://nl.wikipedia.org/wiki/International_Bank_Account_Number). It does _not_ have to be a valid IBAN, just one that looks like it.

1. Implement the following function:
   ```ts
   function generateIban(bankCode: string, countryCode: string) {
       // TODO: implement 
       return {
          countryCode: /* TODO */,
          bankCode: /* TODO */,
          accountNumber: /* TODO */,
          controlNumber: 0
       };
   }
   ```
   As control number, you can use `'00'` for now.\
   _Note_: you can use `Math.floor(Math.random() * 10000000000).toString()` to generate random account number
1. Make the `bankCode` and `countryCode` optional, the default values are `DEFAULT_BANK_CODE` and `DEFAULT_COUNTRY_CODE` respectively.
1. Can you guess what the return type of this function is? Verify this by hovering over the function name in your code editor.

## Exercise 3 - Format IBAN account numbers

1. Create and implement the `formatIban(iban: any)` function.
   It should format the IBAN in groups of 4:

   ```
   NL50 TYPE 3532 0409 92 
   NL97 INGB 9589 7465 22 
   DE09 DEUT 6102 3797 98 
   ```
   
   Verify that your method works using these examples:

   ```ts
   const ibanTypedBank = generateIban();
   const ibanIng = generateIban('INGB', 'NL');
   const ibanDeutscheBank = generateIban('DEUT', 'DE');
   console.log(formatIban(ibanTypedBank));
   console.log(formatIban(ibanIng));
   console.log(formatIban(ibanDeutscheBank));
   ```
   
2. Improve the function by using _Object matching_ in the parameter names

## Exercise 4 - Valid IBAN accounts - If time permits

Make sure that the `generateIban` function only generate _valid_ IBAN account numbers by calculating the control number (https://nl.wikipedia.org/wiki/International_Bank_Account_Number).

Hint: you might need to use [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) for this.