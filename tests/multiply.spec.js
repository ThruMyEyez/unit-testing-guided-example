const { multiply } = require('./../calculator.js');

test('Function is called with two positive integers. The value returned number should be.', () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
});

test('Function is called with a negative and a positive integer. The value returned should be a negative number', () => {
  const result = multiply(-1, 3);
  expect(result).toBe(-3);
});

test('Function is called with any number and a number 0. The value returned should be 0', () => {
  const result = multiply(5);
  expect(result).toBe(0);
});
