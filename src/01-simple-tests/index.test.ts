// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Add });
    expect(result).toEqual(4);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Subtract });
    expect(result).toEqual(0);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Multiply });
    expect(result).toEqual(4);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Divide });
    expect(result).toEqual(1);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(4);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: 'Test' });
    expect(result).toEqual(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({
      a: '2',
      b: '2',
      action: Action.Add,
    });
    expect(result).toEqual(null);
  });
});
