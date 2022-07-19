import { expect } from "chai";
import { Accountant } from "src/accountant";
import { Bank } from "src/bank";
import { BankAccount } from "src/bank-account";
import { CheckingAccount } from "src/checking-account";
import { SavingsAccount } from "src/savings-account";
import sinon, { StubbedInstance, stubObject } from "ts-sinon";

describe('Bank', () => {
    let sut: Bank;
    let accountant: Accountant = {
        notify() { }
    };
    let stubbedAccountant: StubbedInstance<Accountant>;

    beforeEach(() => {
        sut = new Bank();
        stubbedAccountant = stubObject<Accountant>(accountant);
    });

    it('creates savings accounts', () => {
        sut.createAccount('JP', 16000, 'savings');
        expect(sut.accounts.length).to.eq(1);
        expect(sut.accounts[0]).to.be.instanceOf(SavingsAccount);
    });

    it('creates checking accounts', () => {
        sut.createAccount('JP', 600, 'checking');
        expect(sut.accounts[0]).to.be.instanceOf(CheckingAccount);
        expect(sut.accounts.length).to.eq(1);
    });

    it('transfers money', () => {
        // really these methods are not fully unittests
        // transfer tests should really mock away the implementations
        // of withdraw/deposit
        let from = sut.createAccount('JP', 600, 'checking');
        let to = sut.createAccount('Job', 40000, 'savings');

        sut.transforMoney(from, to, 300);

        expect(from.credit).to.eq(300);
        expect(to.credit).to.eq(40300);
    });

    it('transfers money with not enough balance in the savings account', () => {
        let from = sut.createAccount('Job', 4000, 'savings');
        let to = sut.createAccount('JP', 600, 'checking');

        expect(() => sut.transforMoney(from, to, 4500)).to.throw();
    });

    it('notifies an accountant if the amount is too high', () => {
        let from = sut.createAccount('Job', 40000, 'savings');
        let to = sut.createAccount('JP', 600, 'checking');

        from.accountants.push(stubbedAccountant);
        sut.transforMoney(from, to, BankAccount.HIGH_AMOUNT + 5);

        // expect(stubbedAccountant.notify).calledOnce('q', 'w');

        sinon.assert.calledOnce(stubbedAccountant.notify);
    });
});