import { Iban } from './Iban.js';
import { Customer } from './Customer.js';

export class BankAccount {
  constructor(public customer: Customer, public iban: Iban) {
  }

  toString(): string {
    return `[${this.iban.format()}] ${this.customer.format()}`;
  }

  static fromJson(bankAccount: BankAccount): BankAccount {
    return new BankAccount(
      Customer.fromJson(bankAccount.customer),
      Iban.fromJson(bankAccount.iban)
    );
  }
}
