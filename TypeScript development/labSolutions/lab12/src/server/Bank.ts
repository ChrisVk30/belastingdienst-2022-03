import { BankAccount, BankConfig, Customer } from '../shared/index.js';
import { auditLog } from './auditLog.js';

export class Bank {
  public readonly accounts: BankAccount[];
  constructor(public readonly config: BankConfig) {
    this.accounts = [];
  }

  public createAccount(customer: Customer) {
    const newAccount = new BankAccount(customer, this.config.bankCode, this.config.countryCode);
    this.accounts.push(newAccount);
    auditLog(customer, 'assigned');
    this.greetNewCustomer(customer);
  }

  private greetNewCustomer(customerToBeGreeted: Customer) {
    const name = customerToBeGreeted.format();
    switch (this.config.language) {
      case 'nl':
        console.log(`${this.config.name} verwelkomt ${name}`);
        break;
      case 'en':
        console.log(`${this.config.name} welcomes ${name}`);
        break;
      case 'fr':
        console.log(`${this.config.name} accueille ${name}`);
        break;
    }
  }
}
