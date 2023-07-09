/*
Given an array of integers and an integer target, return true if is possible to generate target using some numbers combination from the array.
You may assume that each input would have more than one solution, and you may use the same element more than once. All integers are grether or equal to zero.
*/

function canSum(target, numArr) {
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numArr) {
        if (canSum(target - num, numArr)) return true;
    }

    return false;
}

function canSumMemo(target, numArr, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (const num of numArr) {
        if (canSumMemo(target - num, numArr, memo) === true) {
            return (memo[target] = true);
        }
    }

    return (memo[target] = false);
}

module.exports = { canSum, canSumMemo };
