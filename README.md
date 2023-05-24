#  Bank Tech Test 

### *Requirements*
* *You should be able to interact with the your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)*
* *Deposits, withdrawal.*
* *Account statement (date, amount, balance) printing.*
* *Data can be kept in memory (it doesn't need to be stored to a database or anything).*

### *Acceptance criteria*

*Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see:*
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

````
## Running tests

````
open SpecRunner.html
````

## Usage
Using Chrome on a Mac, hold down Cmd + Alt + J to open the console.

Follow these instructions to run the program:

1. Run the program and create a bank account:
````
> var account = new Account();
<= undefined
````
2. Deposit £10
````
> account.deposit(10)
<= undefined
> account.balance
<= 10
````
3. Withdraw £5
````
> account.withdraw(5)
<= undefined
> account.balance
<= 5
````
4. Display the balance
````
> account.balance
<= 5
````
5. Print a statement
````
> account.statement
date || credit || debit || balance
12/06/2017 ||  || 5.00 || 5.00
12/06/2017 || 10.00 ||  || 10.00
<= nil
````

## User stories
```
As a client, so I can keep track of my finances I want to be able to make deposits.

As a client, so I can keep track of my finances I want to be able to make withdrawals.

As a client, so I can keep track of my money I want to be able to print account statements showing date, amount and balance


```
