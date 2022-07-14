# Lab 17 - Implement `@auditLog`

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

**Note:** Make sure that typescript compiler is running in watch mode (`npx tsc -b -w`).

## Exercise 1 - Create `@auditLog`

Alter the `auditLog` function to now be a decorator. You should be able to use it in the bank like this:

```ts
@auditLog
public createAccount(customer: Customer) {
  // [...]
}
```

It should still log the same. For example: `[Alfred Jodocus Kwak]: createAccount`