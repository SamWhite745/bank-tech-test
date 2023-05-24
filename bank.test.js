const Bank = require('./bank');

describe('bank', () => {
  it("makes a bank and deposits some money", () => {
    const bank = new Bank();
    bank.deposit(500.0);
    expect(bank.balance).toEqual(500.0);
    expect(bank.transactions.length).toEqual(1);
    expect(bank.transactions[0].balance).toEqual(500.0);
  });

  it("prints a statement", () => {
    const logSpy = jest.spyOn(console, 'log');
    const bank = new Bank();
    bank.deposit(500.0, '14/04/23');

    bank.statement();

    expect(logSpy.mock.calls).toEqual([
      ['date || credit || debit || balance'],
      ['14/04/23 || 500.00 ||  || 500.00']
    ]);

  })

});