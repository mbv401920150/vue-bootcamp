import { addArray, sum } from '@/modules/sum.js';

describe('sum function', () => {
  test('sum of two numbers should return the sum', () => {
    const firstNumber = 1;
    const secondNumber = 2;

    const result = sum(firstNumber, secondNumber);

    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  });
});

describe('addArray function', () => {
  test('from array should return the sum of all values', () => {
    const myArr: number[] = [5, 7, 8];
    const result = addArray(myArr);

    expect(result).toBe(20);
  });

  test('from an empty array should return 0', () => {
    const myArr: number[] = [];
    const result = addArray(myArr);

    expect(result).toBe(0);
  });
});
