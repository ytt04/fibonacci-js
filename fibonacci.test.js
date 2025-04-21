const { fibonacci } = require('./fibonacci');

test('Fibonacci de 0 debe ser 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('Fibonacci de 1 debe ser 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('Fibonacci de 2 debe ser 1', () => {
  expect(fibonacci(2)).toBe(1);
});

test('Fibonacci de 3 debe ser 2', () => {
  expect(fibonacci(3)).toBe(2);
});

test('Fibonacci de 6 debe ser 8', () => {
  expect(fibonacci(6)).toBe(8);
});


//RUN: npm test 