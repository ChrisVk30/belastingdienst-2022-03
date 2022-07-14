import { Bank } from './Bank.js';
import { Customer } from '../shared/index.js';
import { BankServer } from './BankServer.js';

const bank = new Bank({
  bankCode: 'TYPE',
  countryCode: 'NL',
  name: 'Typed bank',
  port: 8080,
  language: 'nl'
});
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pitt'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

new BankServer(bank).listen();