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

    test ('credit transaction is added to transactions array', () => {
        const account = new BankAccount();
        account.deposit("12/01/21", 1000)
        expect(account.getTransactions().length).toEqual(1);
    });

    test ('returns the correct credit amount', () => {
        const account = new BankAccount();
        account.deposit("12/01/21", 1000);
        const result = account.transactionsIncludingBalance();
        expect(result[0].credit).toEqual(1000);
    });

    test ('produces an account statement based on all transactions', () => {
        const account = new BankAccount();
        account.deposit("10/01/2023", 1000);
        account.deposit("13/01/2023", 2000);
        account.withdraw("14/01/2023", 500);
        const expectedAccountStatement = "date  ||  credit  ||  debit  ||  balance\n" +
          "10/01/2023  ||  1000  ||  0  ||  1000\n" +
          "13/01/2023  ||  2000  ||  0  ||  3000\n" +
          "14/01/2023  ||  0  ||  500  ||  2500\n";
        expect(account.accountStatement()).toContain(expectedAccountStatement);
      });

})