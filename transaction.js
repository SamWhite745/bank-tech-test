class Transaction {
  constructor({date, credit = "", debit = "", balance}) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  print () {
    return `${this.date} || ${this.credit} || ${this.debit} || ${this.balance}`
  }
}

module.exports = Transaction;