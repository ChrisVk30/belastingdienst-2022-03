import express from 'express';
import bodyParser from 'body-parser';
import { Bank } from './Bank.js';
import { Customer, Jsonified } from '../shared/index.js';

export class BankServer {

  private app: express.Express;

  constructor(private bank: Bank) {
    this.app = express();
    const router = this.createApiRouter();
    this.app.use(bodyParser.json());
    this.app.use('/api', router);
    this.app.use(express.static('static'));
    this.app.use(express.static('dist'));
    this.app.use('/src', express.static('src'));
    this.app.use('/node_modules', express.static('node_modules'));
  }

  listen() {
    this.app.listen(this.bank.config.port);
    console.log(`Bank ${this.bank.config.name} listening on port ${this.bank.config.port}`);
  }

  private createApiRouter() {
    const router = express.Router({ caseSensitive: false });
    router.get('/bank', (_, response) => {
      console.log('Requested /api/bank');
      response.json(this.bank.config);
    });
    router.get('/accounts', (_, response) => response.json(this.bank.accounts));
    router.post('/customers', (request, response) => {
      const maybeCustomer: unknown = request.body;
      if (this.isValid(maybeCustomer)) {
        this.bank.createAccount(new Customer(
          maybeCustomer.firstName,
          maybeCustomer.lastName,
          maybeCustomer.insertion));
        response.status(204);
        response.end();
      } else {
        response.status(422);
        response.end('Customer entity invalid');
      }
    });
    return router;
  }

  private isValid(customer: any): customer is Jsonified<Customer> {
    if (customer
      && customer.firstName && typeof customer.firstName === 'string'
      && customer.lastName && typeof customer.lastName === 'string' &&
      (!customer.insertion || typeof customer.insertion === 'string')) {
      return true;
    } else {
      return false;
    }
  }
}
