class Transaction {
    constructor (date, credit, debit) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
    }

    getDate() {
    return this.date;
    }
    
    getCredit() {
    return this.credit;
    }

    getDebit() {
    return this.debit;
    }
};

module.exports = Transaction; 