const { BADFLAGS } = require('dns');
const Transaction = require('./transaction');

describe('transaction', () => {
  it('creates a transaction and prints it to the console', () => {
    const transaction = new Transaction({date:"14/01/2023", debit:"500.00", balance: "2500.00"});
    expect(transaction.print()).toEqual("14/01/2023 ||  || 500.00 || 2500.00");
  });
});