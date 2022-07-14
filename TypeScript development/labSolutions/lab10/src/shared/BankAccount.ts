import { Iban } from './Iban.js';
import { Customer } from './Customer.js';

export class BankAccount {
  public iban: Iban;

  constructor(public customer: Customer, bankCode: string, countryCode: string) {
    this.iban = Iban.generate(bankCode, countryCode);
  }

  toString(): string {
    return `[${this.iban.format()}] ${this.customer.format()}`;
  }
}
