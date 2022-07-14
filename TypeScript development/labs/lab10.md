# Lab 10 - Create the webserver

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the _labsSolutions_ folder.

In this lab, we will create the bank web server.

## Exercise 1 - Create a bank web server

For this exercise we'll use the express web server.

1. Install express using `npm i express body-parser`
2. Install the _typings_ for express and body-parser using `npm i -D @types/express @types/body-parser`
3. Add a property `port` to the `BankConfig` interface. Be sure to update the instance of the BankConfig in your code (follow the compile error). Choose port number `8080` for the `'Typed bank'`.
4. Create a new class `BankServer`. The constructor should take a `Bank`.
5. Be sure to import `express` and `body-parser`

   ```ts
   import express from 'express';
   import bodyParser from 'body-parser';
   ```

6. Create an express app whenever a `BankServer` gets constructed: `this.app = express();`
7. Add a `listen` method to the `BankServer`. It should create a webserver which listens to the port configured in the `config` of that `Bank`. Log a line to the console in the `listen` method to indicate that you are running the webserver.
   ```ts
   this.app.listen(this.bank.config.port);
   console.log(
     `Bank ${this.bank.config.name} listening on port ${this.bank.config.port}`
   );
   ```
8. Use the [official express documentation](https://expressjs.com/en/starter/basic-routing.html) to implement the following methods:

   - HTTP GET on `/api/bank` should provide the config of the bank as a JSON object
   - HTTP GET on `/api/accounts` should provide the bank accounts belonging to the bank as a JSON array.

   **Hint:** you can use `resp.json(myObject)` to respond with a JSON body and a `Content-Type: application/json` header.

## Exercise 2 (if time permits)

1. Implement the HTTP POST on `/api/customers`. It should add the provided JSON customer to the current bank and return a 204 - No Content. Tip: you might need the `'body-parser'` now.
2. Try it out using the following cURL command. You can also use a tool like Postman or an HttpRequester browser plugin.
   ```shell
   $ curl -H 'Content-Type: application/json' -d '{ "firstName": "James", "lastName": "Bond" }' http://localhost:8080/api/customers
   ```
3. Feel free to implement some validation. These customers are invalid:

   ```shell
   $ curl -H 'Content-Type: application/json' -d '{ "firstName": "Only first name" }' http://localhost:8080/api/customers
   ```

   ```shell
   $ curl -H 'Content-Type: application/json' -d '{ "lastName": "Only last name" }' http://localhost:8080/api/customers
   ```

   ```shell
   $ curl -H 'Content-Type: application/json' -d '{"firstName": "John","lastName": "Doe","insertion": 42}' http://localhost:8080/api/customers
   ```
