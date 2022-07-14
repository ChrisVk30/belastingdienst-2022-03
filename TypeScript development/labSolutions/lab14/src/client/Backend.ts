import { BankAccount, BankConfig, Customer } from '../shared/index.js';

export class Backend {

  async retrieveBank(): Promise<BankConfig> {
    const response = await fetch('/api/bank');
    return await (response.json() as Promise<BankConfig>);
  }

  async retrieveBankAccounts(): Promise<BankAccount[]>  {
    const response = await fetch('/api/accounts');
    const bankAccountsJson = await (response.json() as Promise<BankAccount[]>);
    return bankAccountsJson.map((json) => BankAccount.fromJson(json));
  }

  async addCustomer(customer: Customer): Promise<void> {
    await fetch('api/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}