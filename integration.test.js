const BankAccount = require('./bank_account');
const Transaction = require('./transaction');

describe('BankAccount', () => {

    test ('debit transaction is added to transactions array', () => {
        const account = new BankAccount();
        account.withdraw("12/01/21", 1000)
        expect(account.getTransactions().length).toEqual(1);
    });

    test ('debit transaction is added to transactions array', () => {
        const account = new BankAccount();
        account.withdraw("12/01/21", 1000)
        expect(account.getTransactions().length).toEqual(1);
    });

})