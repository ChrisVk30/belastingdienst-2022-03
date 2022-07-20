import {BankAccount} from './bank-account';

export class SavingsAccount extends BankAccount {
	constructor(public name: string, public credit: number) {
		super(name, credit);
	}

	withdraw(amount: number): void {
		if (this.credit - amount < 0) {
			throw new Error('Not enough moneeeyyyy');
		}

		super.withdraw(amount);
	}
}
