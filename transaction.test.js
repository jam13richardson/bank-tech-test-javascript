const Transaction = require('./transaction');

describe('Transaction', () => {

    test ('constructs', () => {
        const transaction = new Transaction("22/05/2023", 500, 200);
        expect(transaction.getDate()).toEqual("22/05/2023");
        expect(transaction.getCredit()).toBe(500);
        expect(transaction.getDebit()).toBe(200);
    });
})