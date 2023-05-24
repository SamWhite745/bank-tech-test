class Transaction {
  constructor({date, credit = "", debit = "", balance}) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  print () {
    return `${this.date} || ${this.credit != "" ? this.credit.toFixed(2) : ""} || ${this.debit != "" ? this.debit.toFixed(2) : ""} || ${this.balance.toFixed(2)}`
  }
}

module.exports = Transaction;