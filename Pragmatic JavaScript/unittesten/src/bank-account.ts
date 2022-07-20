import {Accountant} from './accountant';

export abstract class BankAccount {
	static HIGH_AMOUNT = 10000;

	accountants: Accountant[] = [];
	constructor(public name: string, public credit: number) {}

	deposit(amount: number): void {
		this.credit += amount;
	}

	withdraw(amount: number) {
		this.credit -= amount;

		if (amount > BankAccount.HIGH_AMOUNT) {
			this.accountants.forEach(acc => acc.notify(this, amount));
		}
	}

	// KISS
	addAccountant(accountant: Accountant) {
		this.accountants.push(accountant);
	}
}
