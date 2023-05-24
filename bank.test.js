const Bank = require('./bank');

describe('bank', () => {

  afterEach(() => {    
    jest.clearAllMocks();
  });

  it("makes a bank and deposits some money", () => {
    const bank = new Bank();
    bank.deposit(500.0);
    expect(bank.balance).toEqual(500.0);
    expect(bank.transactions.length).toEqual(1);
    expect(bank.transactions[0].balance).toEqual(500.0);
  });

  it("makes a bank, deposits some money then withdraws some", () => {
    const bank = new Bank();
    bank.deposit(500.0, "date");
    bank.withdraw(200.0, "date");
    expect(bank.balance).toEqual(300.0);
    expect(bank.transactions.length).toEqual(2);
    expect(bank.transactions[1].balance).toEqual(300.0);
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

  it("prints a more advanced statement", () => {
    const logSpy = jest.spyOn(console, 'log');
    const bank = new Bank();
    bank.deposit(500.0, '14/04/23');
    bank.deposit(1250.99, '18/04/23');

    bank.statement();

    expect(logSpy.mock.calls).toEqual([
      ['date || credit || debit || balance'],
      ['14/04/23 || 500.00 ||  || 500.00'],
      ['18/04/23 || 1250.99 ||  || 1750.99']
    ]);
  })

  it("prints a statement with withdraws and deposits", () => {
    const logSpy = jest.spyOn(console, 'log');
    const bank = new Bank();
    bank.deposit(500.0, '14/04/23');
    bank.withdraw(200.0, '18/04/23');

    bank.statement();

    expect(logSpy.mock.calls).toEqual([
      ['date || credit || debit || balance'],
      ['14/04/23 || 500.00 ||  || 500.00'],
      ['18/04/23 ||  || 200.00 || 300.00']
    ]);
  })
});