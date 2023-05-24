Bank Multi-Class Planned Design Recipe

1. Describe the Problem
As a client, so I can keep track of my finances I want to be able to make deposits.

As a client, so I can keep track of my finances I want to be able to make withdrawals.

As a client, so I can keep track of my money I want to be able to print account statements showing date, amount and balance

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00


2. Design the Class System
NOUNS deposits, withrawals, statements, account, money, balance, date, amount, credit, debit

VERBS print, withdraw, deposit

Consider diagramming out the classes and their relationships. Take care to focus on the details you see as important, not everything. The diagram below uses asciiflow.com but you could also use excalidraw.com, draw.io, or miro.com

┌────────────────────────────┐
│ BankAccount                │
│                            │
│ - withdraw                 │
│ - deposit                  │
│ - print                    │
└───────────┬────────────────┘
            │
            │ owns a collection of Transactions
            ▼
┌─────────────────────────┐
│ Transactions            │
│                         │
│ - date                  │
│ - credit                │
│ - debit                 │
│                         │
└─────────────────────────┘


class Transaction {
    constructor () {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
    }
};

module.exports = Transaction 
 


class BankAccount {
    constructor () {
        this.transactions = [];
    }

    withdraw(date, amount) {

    }

    deposit(date, amount) {

    }

    balance () {

    }

    transactions_including_balance () {

    }

    account_statement () {

    }
}


3. Create Examples as Integration Tests
Create examples of the classes being used together in different situations and combinations that reflect the ways in which the system will be used.

# EXAMPLE

const account = new BankAccount();
account.withdraw("12/01/21", 1000);
expect(account.transactions.length).toBe(1);



  it 'debit transaction is added to transactions array' do 
        account = BankAccount.new
        account.withdraw(1000)
        expect(account.transactions.length).to eq(1)
    end

    it 'credit transaction is added to transactions array' do 
        account = BankAccount.new
        account.deposit(1000)
        expect(account.transactions.length).to eq(1)
    end

    it 'calculates overall balance' do 
        account = BankAccount.new
        account.deposit(3000)
        account.withdraw(1000)
        expect(account.balance).to eq(2000)
    end




4. Create Examples as Unit Tests
Create examples, where appropriate, of the behaviour of each relevant class at a more granular level of detail.


5. Implement the Behaviour
After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour.