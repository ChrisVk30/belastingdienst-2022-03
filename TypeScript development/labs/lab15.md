# Lab 15 - Mapped & Conditional types

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the _labsSolutions_ directory.

**Note:** Make sure that typescript compiler is running in watch mode (`npx tsc -b -w`).

## Exercise 1 - Optional BankConfig

Right now, we are required to provide all bank config options when we create a new bank, even if we can think of sane defaults for the values. Let's change that using a mapped type.

1. Add an object containing the sane defaults to the `Bank.ts` file. Create a constant variable called `DEFAULT_BANK_CONFIG`. Add these values as defaults:
   ```ts
   {
       port: 8080,
       bankCode: 'TYPE',
       language: 'nl' as const,
       name: 'unknown bank',
       countryCode: 'NL'
   }
   ```
1. Change the constructor of `Bank` so it now accepts a partial implementation of the `BankConfig` interface.
1. Inside the constructor, copy over the values to use. Use the defaults, but override with the provided values. **Hint**: If you use an ES2015 construct here it can be a one-liner.
1. Test your setup by only providing the bank name to the constructor in the `main.ts` file.
1. Bonus: make sure the default object is entirely read-only. Compile time as well as run-time.

## Exercise 2 - Improve json types (if time permits)

In the `Backend.ts` file (in the client project) we have a method for retrieving `BankAccount`s. However, the bank accounts we receive from the server are plain JS objects and don't have the `format` method. This is because they are serialized with `JSON.stringify` and deserialized with `JSON.parse`.

Create a mapped type using conditional types to improve the typing. The new type is based on the `BankAccount`, but with the methods removed. It looks like this (pseudo code):

```ts
// The goal, using pseudo code
type Jsonified<BankAccount> = {
  customer: {
    firstName: string;
    lastName: string;
    insertion?: string;
  };
  iban: {
    countryCode: string;
    bankCode: string;
    accountNumber: string;
    controlNumber: number;
  };
};
```

Start with this code, store it in "src/shared/Jsonified.ts":

```ts
export type Jsonified<T> = {
  [K in keyof T]: T[K];
};
```

**Tip**: You should end up with a recursive type.

Make sure this type is used when appropriate.
