import { BankAccount, BankConfig, Customer } from '../shared/index.js';
import { auditLog } from './auditLog.js';

export class Bank {
  private readonly accounts: BankAccount[];
  constructor(private readonly config: BankConfig) {
    this.accounts = [];
  }

  public createAccount(customer: Customer) {
    const newAccount = new BankAccount(customer, this.config.bankCode, this.config.countryCode);
    this.accounts.push(newAccount);
    auditLog(customer, 'assigned');
    console.log(`[${this.config.name}] welcomes ${newAccount}`);
  }

}
