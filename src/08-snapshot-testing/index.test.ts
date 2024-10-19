// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const testArgs = Array(10).map((_, index) => `${index + 1}`);
  const expected = {
    value: null,
    next: {
      value: null,
      next: {
        value: null,
        next: {
          value: null,
          next: {
            value: null,
            next: {
              value: null,
              next: {
                value: null,
                next: {
                  value: null,
                  next: {
                    value: null,
                    next: { value: null, next: { value: null, next: null } },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const result = generateLinkedList(testArgs);

    expect(result).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const result = generateLinkedList(testArgs);

    expect(result).toMatchSnapshot();
  });
});
