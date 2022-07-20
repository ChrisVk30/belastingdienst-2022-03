import {BankAccount} from './bank-account';
import {CheckingAccount} from './checking-account';
import {SavingsAccount} from './savings-account';

export class Bank {
	accounts: BankAccount[] = [];

	createAccount(name: string, initialCredit: number, type: 'savings' | 'checking') {
		if (type === 'savings') {
			const account = new SavingsAccount(name, initialCredit);
			this.accounts.push(account);
			return account;
		}

		const account = new CheckingAccount(name, initialCredit);
		this.accounts.push(account);
		return account;
	}

	transforMoney(from: BankAccount, to: BankAccount, amount: number) {
		from.withdraw(amount);
		to.deposit(amount);
	}
}
