import { Bank } from './Bank.js';
import { Customer } from '../shared/index.js';
import { BankServer } from './BankServer.js';

const bank = new Bank({ name: 'Typed bank' });
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pitt'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

new BankServer(bank).listen();