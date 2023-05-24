const Transaction = require('./transaction');

describe('transaction', () => {
  it('creates a transaction and prints it to the console', () => {
    const transaction = new Transaction({date:"14/01/2023", debit:500.0, balance: 2500.0});
    expect(transaction.print()).toEqual("14/01/2023 ||  || 500.00 || 2500.00");
  });

  it('create a transaction with credit', () => {
    const transaction = new Transaction({date:"14/01/2023", credit:500.0, balance: 2000.0});
    expect(transaction.print()).toEqual("14/01/2023 || 500.00 ||  || 2000.00");
  });
});