const { canSum, canSumMemo } = require('./index.js');
const { performance } = require('perf_hooks');

test('returns the corret value', () => {
    expect(canSum(7, [2, 3])).toBe(true);
    expect(canSum(5, [5, 3, 2, 7])).toBe(true);
    expect(canSum(5, [3, 4])).toBe(false);
    expect(canSum(5, [1, 0])).toBe(true);
    expect(canSum(250, [7, 14])).toBe(false);
});

test('returns the corret value using memoization', () => {
    expect(canSumMemo(7, [2, 3])).toBe(true);
    expect(canSumMemo(5, [5, 3, 2, 7])).toBe(true);
    expect(canSumMemo(5, [3, 4])).toBe(false);
    expect(canSumMemo(5, [1, 0])).toBe(true);
    expect(canSumMemo(250, [7, 14])).toBe(false);
});

test('performance using memoization should be better', () => {
    let start, end;

    start = performance.now();
    canSum(250, [7, 14]);
    end = performance.now();
    const perfNoMemo = end - start;

    start = performance.now();
    canSumMemo(250, [7, 14]);
    end = performance.now();
    const perfWithMemo = end - start;

    expect(perfWithMemo < perfNoMemo).toBe(true);
});
