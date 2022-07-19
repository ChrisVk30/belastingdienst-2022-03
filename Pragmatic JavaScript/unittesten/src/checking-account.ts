import { BankAccount } from "./bank-account";


export class CheckingAccount extends BankAccount {
    constructor(public name: string, public credit: number) {
        super(name, credit);
    }

    withdraw(amount: number): void {
        super.withdraw(amount);
    }
}