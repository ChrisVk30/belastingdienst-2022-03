import { BankAccount, BankConfig, Customer } from '../shared/index.js';
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