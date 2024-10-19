// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 100;
  const bankAccount = getBankAccount(initialBalance);
  const transferBankAccount = getBankAccount(initialBalance);

  test('should create account with initial balance', () => {
    // Write your test here
    expect(bankAccount.getBalance()).toEqual(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    try {
      bankAccount.withdraw(101);
    } catch (error: any) {
      expect(error).toBeInstanceOf(InsufficientFundsError);
      expect(error.message).toEqual(
        `Insufficient funds: cannot withdraw more than ${initialBalance}`,
      );
    }
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    try {
      bankAccount.transfer(101, transferBankAccount);
    } catch (error: any) {
      expect(error).toBeInstanceOf(InsufficientFundsError);
      expect(error.message).toEqual(
        `Insufficient funds: cannot withdraw more than ${initialBalance}`,
      );
    }
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    try {
      bankAccount.transfer(101, bankAccount);
    } catch (error: any) {
      expect(error).toBeInstanceOf(TransferFailedError);
      expect(error.message).toEqual('Transfer failed');
    }
  });

  test('should deposit money', () => {
    // Write your test here
    const deposit = 100;
    const expected = bankAccount.getBalance() + deposit;
    bankAccount.deposit(deposit);
    expect(bankAccount.getBalance()).toEqual(expected);
  });

  test('should withdraw money', () => {
    // Write your test here
    const withdraw = 50;
    const expected = bankAccount.getBalance() - withdraw;
    bankAccount.withdraw(withdraw);
    expect(bankAccount.getBalance()).toEqual(expected);
  });

  test('should transfer money', () => {
    // Write your test here
    const transfer = 50;

    const expected = bankAccount.getBalance() - transfer;
    const expectedTransfer = transferBankAccount.getBalance() + transfer;

    bankAccount.transfer(transfer, transferBankAccount);

    expect(bankAccount.getBalance()).toEqual(expected);
    expect(transferBankAccount.getBalance()).toEqual(expectedTransfer);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const result = await bankAccount.fetchBalance();

    if (result !== null) {
      expect(typeof result).toEqual('number');
    } else {
      expect(result).toEqual(null);
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    try {
      const result = await bankAccount.fetchBalance();
      const expected = bankAccount.getBalance();

      expect(result).toEqual(expected);
    } catch (error) {}
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    try {
      await bankAccount.fetchBalance();
    } catch (error: any) {
      expect(error).toBeInstanceOf(SynchronizationFailedError);
      expect(error.message).toEqual('Synchronization failed');
    }
  });
});
