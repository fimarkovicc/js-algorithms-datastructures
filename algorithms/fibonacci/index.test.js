const { calculateFib, fibMemo, fib } = require('./index.js');
const { performance } = require('perf_hooks');

test('should return the correct fibonacci number', () => {
    expect(calculateFib([0, 1, 8, 12, 25], fib).result).toStrictEqual([1, 1, 21, 144, 75025]);
});

test('should return the correct fibonacci number using memoization', () => {
    expect(calculateFib([0, 1, 8, 12, 25], fibMemo).result).toStrictEqual([1, 1, 21, 144, 75025]);
});

test('performance using memoization should be better', () => {
    const perfFn = calculateFib([32], fib).performance;
    const perfFnMemo = calculateFib([32], fibMemo).performance;

    expect(perfFnMemo < perfFn);
});
