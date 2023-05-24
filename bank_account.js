const Transaction = require('./transaction');

class BankAccount {
    constructor () {
        this.transactions = []
    }

    getTransactions() {
    return this.transactions;
    }

    withdraw(date, amount) {
        const newTransaction = new Transaction(date, 0, amount)
        this.transactions.push(newTransaction);
    }
    
    
};

module.exports = BankAccount; 