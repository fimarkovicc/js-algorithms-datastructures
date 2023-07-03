const { calculateFib, fibMemo, fib } = require('./fibonacci.js');

test('should return the correct fibonacci number', () => {
    expect(calculateFib([0, 1, 8, 12, 25, 42], fib)).toStrictEqual([
        1, 1, 21, 144, 75025, 267914296,
    ]);
});

test('should return the correct fibonacci number using memoization', () => {
    expect(calculateFib([0, 1, 8, 12, 25, 42], fibMemo)).toStrictEqual([
        1, 1, 21, 144, 75025, 267914296,
    ]);
});
