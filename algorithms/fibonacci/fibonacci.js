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
        // const start = performance.now();
        const fibResult = fn(number);
        // const end = performance.now();
        // console.log(
        //     `Fib${fn === fibMemo ? 'MEMO' : ''} of ${number}: ${fibResult}, ${end - start} ms`,
        // );
        result.push(fibResult);
    });
    const end = performance.end();
    // console.log(result);
    return result;
}

// const numbersToCalculate = [1, 8, 12, 25, 42];
// calculateFib(numbersToCalculate, fib);
// calculateFib(numbersToCalculate, fibMemo);

module.exports = { calculateFib, fibMemo, fib };
