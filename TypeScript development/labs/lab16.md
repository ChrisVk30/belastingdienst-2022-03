# Lab 16 - A type-safe `fetch`

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the _labsSolutions_ directory.

**Note:** Make sure that typescript compiler is running in watch mode (`npx tsc -b -w`).

Until now, we've been using the browser's `fetch` API as a means to call the backend. This is unfortunately not type safe. In this lab, we'll try to improve this a bit.

## Exercise 1 - Create routes

Create a new file called "Routes.ts" in our "shared" project. This file will hold the routes within our application. Start with this code:

```ts
import { BankAccount } from './BankAccount';
import { BankConfig } from './BankConfig';
import { Customer } from './Customer';

export const contextRoot = 'api';

export interface Entities {
  accounts: BankAccount[];
  bank: BankConfig;
  customers: Customer[];
}

export type BankRoute = string; // TODO! Template literal type here
```

Alter the `BankRoute` type so it can only contain a valid bank route. For example:

```ts
const route: BankRoute = '/api/accounts'; // VALID
const route2: BankRoute = '/app/accounts'; // INVALID
const route3: BankRoute = '/api/acc0unts'; // INVALID
```

Be sure to use the `Entities` interface in your _template literal type_. 

Don't forget to export `BankRoute`, `BankRoute` and `contextRoot` from the shared "index.ts" file.

## Exercise 2 - Create a type safe `get`

Create a new file "http.ts" inside the "client" project. Start with this code:

```ts
import { BankRoute } from '../shared/index.js';

export async function get(route: BankRoute): Promise<unknown> {
  const response = await fetch(route);
  if (!response.ok) {
    throw new Error(`Response was not OK: ${response.status}`);
  }
  return response.json() as Promise<unknown>;
}

export async function post(route: BankRoute, body: unknown): Promise<void> {
  const response = await fetch(route, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error(`Response was not OK: ${response.status}`);
  }
}
```

Start using this code from the `Backend` class:

```ts
// [...]
import * as http from './http.js';

export class Backend {
  public async retrieveBank(): Promise<BankConfig> {
    return http.get('/api/bank');
  }

  public async retrieveBankAccounts(): Promise<BankAccount[]> {
    const bankAccounts = await http.get('/api/accounts');
    return bankAccounts.map((bankAccount) => BankAccount.fromJson(bankAccount));
  }

  public async addCustomer(customer: Customer): Promise<void> {
    await http.post('/api/customers', customer);
  }
}
```

As you can see, this will result in multiple compile errors. Try to alter the `get` function in "http.ts", in order to make the function type-safe using template literal types and the `Entities` mapped type.

**Hint**: you might have to use the `infer` keyword.

## Exercise 3 - Create a type safe `post` - if time permits

Next, do the same for `post`. I.e. this should result in a compile error:

```ts
// [...]
export class Backend {
  // [...]

  public async addCustomer(customer: Customer): Promise<void> {
    await http.post('/api/accounts', customer);
    //                               ^^^^^^^^
    // Argument of type 'Customer' is not assignable to parameter of type 'BankAccount'.
  }
}
```
