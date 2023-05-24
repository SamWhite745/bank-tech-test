const Transaction = require('./transaction');

class Bank {
  constructor () {
    this.balance = 0.0;
    this.transactions = [];
  }

  deposit(money) {
    this.balance += money;
  }
}

module.exports = Bank;