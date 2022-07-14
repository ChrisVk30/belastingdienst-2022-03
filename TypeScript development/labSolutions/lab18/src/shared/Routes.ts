import { BankAccount } from './BankAccount';
import { BankConfig } from './BankConfig';
import { Customer } from './Customer';

export const contextRoot = 'api';

export interface Entities {
  accounts: BankAccount[];
  bank: BankConfig;
  customers: Customer[];
}

export type BankRoute = `/${typeof contextRoot}/${keyof Entities}`;
