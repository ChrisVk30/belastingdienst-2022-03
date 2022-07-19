import { BankAccount } from "./bank-account";

export interface Accountant {
    notify(account: BankAccount, amount: number): void;
}
