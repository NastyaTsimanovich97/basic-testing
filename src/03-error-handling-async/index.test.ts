// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const value = 'test';
    const result = await resolveValue(value);
    expect(result).toEqual(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const message = 'Test';
    try {
      throwError(message);
    } catch (error: any) {
      expect(error.message).toEqual(message);
    }
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    try {
      throwError();
    } catch (error: any) {
      expect(error.message).toEqual('Oops!');
    }
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    try {
      throwCustomError();
    } catch (error: any) {
      expect(error).toBeInstanceOf(MyAwesomeError);
      expect(error.message).toEqual(new MyAwesomeError().message);
    }
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    try {
      await rejectCustomError();
    } catch (error: any) {
      expect(error).toBeInstanceOf(MyAwesomeError);
      expect(error.message).toEqual(new MyAwesomeError().message);
    }
  });
});
