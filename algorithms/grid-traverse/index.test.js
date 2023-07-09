const { gridTraverse, gridTraverseMemo } = require('./index.js');
const { performance } = require('perf_hooks');

test('should return the correct value', () => {
    expect(gridTraverse([1, 3])).toBe(1);
    expect(gridTraverse([3, 0])).toBe(0);
    expect(gridTraverse([3, 3])).toBe(6);
});

test('should return the correct value using memoization', () => {
    expect(gridTraverseMemo([1, 3])).toBe(1);
    expect(gridTraverseMemo([3, 0])).toBe(0);
    expect(gridTraverseMemo([3, 3])).toBe(6);
});

test('performance using memoization should be better', () => {
    let start, end;

    start = performance.now();
    gridTraverse([4, 4]);
    end = performance.now();
    const perfNoMemo = end - start;

    start = performance.now();
    gridTraverseMemo([4, 4]);
    end = performance.now();
    const perfWithMemo = end - start;

    expect(perfWithMemo < perfNoMemo).toBe(true);
});
