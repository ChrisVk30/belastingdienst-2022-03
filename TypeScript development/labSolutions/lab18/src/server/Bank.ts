import { BankAccount, BankConfig, Customer, Iban } from '../shared/index.js';
import { auditLog } from './auditLog.js';

const DEFAULT_BANK_CONFIG: Readonly<BankConfig> = Object.freeze({
  port: 8080,
  bankCode: 'TYPE',
  language: 'nl' as const,
  name: 'unknown bank',
  countryCode: 'NL'
});

export class Bank {
  public readonly accounts: BankAccount[];
  public readonly config: BankConfig;
  constructor(config: Partial<BankConfig>) {
    this.accounts = [];
    this.config = { ...DEFAULT_BANK_CONFIG, ...config };
  }

  @auditLog
  public createAccount(customer: Customer) {
    const newAccount = new BankAccount(customer, Iban.generate(this.config.bankCode, this.config.countryCode));
    this.accounts.push(newAccount);
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
      default:
        this.handleUnknownLanguage(this.config.language);
    }
  }

  private handleUnknownLanguage(language: never) {
    console.error(`Language ${language} isn't supported yet.`);
  }
}
