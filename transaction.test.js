const Transaction = require('./transaction');

describe('transaction', () => {
  it('creates a transaction and prints it to the console', () => {
    const transaction = new Transaction();
    expect(transaction.print()).toEqual("Something");
  });
});