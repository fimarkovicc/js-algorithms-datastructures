const { performance } = require('perf_hooks');

// T: O(n^2), S: O(n)
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// T: O(n), S: O(n)
function fibMemo(n, memo = {}) {
    if (memo.hasOwnProperty(n)) return memo[n];
    if (n <= 2) return 1;
    return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
}

function calculateFib(numArr, fn) {
    const result = [];
    const start = performance.now();
    numArr.forEach((number) => {
        const fibResult = fn(number);
        result.push(fibResult);
    });
    const end = performance.now();
    // console.log(result);
    // console.log(end - start, 'ms');
    return { result, performance: end - start };
}

const numbersToCalculate = [1, 8, 12, 25, 42];
calculateFib(numbersToCalculate, fib);
calculateFib(numbersToCalculate, fibMemo);

module.exports = { calculateFib, fibMemo, fib };
