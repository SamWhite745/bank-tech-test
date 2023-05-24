const Bank = require('./bank');

describe('bank', () => {
  it("makes a bank and deposits some money", () => {
    const bank = new Bank();
    bank.deposit(500.0);
    expect(bank.balance).toEqual(500.0);
  });
});