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

    deposit(date, amount) {
        const newTransaction = new Transaction(date, amount, 0)
        this.transactions.push(newTransaction);
    }
    
    transactionsIncludingBalance() {
        let balance = 0 
        const transactionsIncludingBalance = [];

        this.transactions.forEach(transaction => {
            if(transaction.credit > 0) {
                balance += transaction.credit;
            } else {
                balance -= transaction.debit;
            }

            transactionsIncludingBalance.push({
                date: transaction.date, 
                credit: transaction.credit,
                debit: transaction.debit,
                balance: balance
            });
    });

        return transactionsIncludingBalance;
    }
    
    accountStatement() {
        let statement = "date  ||  credit  ||  debit  ||  balance\n"

        this.transactionsIncludingBalance().forEach(transaction => {
            const date = transaction.date;
            const credit = transaction.credit;
            const debit = transaction.debit;
            const balance = transaction.balance;
        
            statement += `${date}  ||  ${credit}  ||  ${debit}  ||  ${balance}\n`;
          });
          return statement;
    }
};

module.exports = BankAccount; 