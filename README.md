# Bank Tech-Test

A short tech test on building a bank app with simple commands.

## Technologies
* MacOS
* Javascript
* Jest
* Git

## Dependencies

To run the program you can use [Node](https://nodejs.org/en).

### Testing the program

```sh
# Create the project directory
$ git clone ...
$ cd bank-tech-test

# install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run the tests
$ jest
```

### Executing the program

```sh
# Setup our environment to use node latest version
$ nvm use node

# Enter node REPL
$ node
```
You will now be in the node REPL where we can start using the program.

First you will need to import the bank file and create an instance of bank with:

```js
const Bank = require('./bank');
const bank = new Bank();
```
Now you can start interacting with the bank with the following commands:
```js
// withdraw(amount, date) - withdraws money
bank.withdraw(500.0, '24/05/23');

// deposit(amount, date) - deposits money
bank.deposit(500.0, '24/05/23');

// statement() - prints a bank statement
bank.statement();

// exit the program with Ctrl+D or type .exit
```

## Notes

Any questions or comments can be addressed to me at
* [@SamWhite745](https://github.com/SamWhite745)
* sam.white745@gmail.com

