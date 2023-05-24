const BankAccount = require('./bank_account');

describe('BankAccount', () => {

    test ('constructs', () => {
        const account = new BankAccount();
        expect(account.getTransactions('')).toEqual([]);
    });

})