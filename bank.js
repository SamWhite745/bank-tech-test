const Transaction = require('./transaction');

class Bank {
  constructor () {
    this.balance = 0.0;
    this.transactions = [];
  }

  deposit(money, date) {
    this.balance += money;
    const transaction = new Transaction({date: date, credit: money, balance: this.balance});
    this.transactions.push(transaction);
  }

  withdraw(money, date) {
    this.balance -= money;
    const transaction = new Transaction({date: date, debit: money, balance: this.balance});
    this.transactions.push(transaction);
  }

  statement () {
    console.log('date || credit || debit || balance');
    this.transactions.forEach((transaction) => console.log(transaction.print()));
  }
}

module.exports = Bank;