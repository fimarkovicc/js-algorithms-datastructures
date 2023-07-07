/*
Given a 2D grid find all posible ways to traverse the grid starting from the top left corner and finishing at the bottom right corner. You can only advance right and down.
*/

function gridTraverse(arr) {
    if (arr[0] === 0 || arr[1] === 0) return 0;
    if (arr[0] === 1 || arr[1] === 1) return 1;
    return gridTraverse([arr[0] - 1, arr[1]]) + gridTraverse([arr[0], arr[1] - 1]);
}

function gridTraverseMemo(arr, memo = {}) {
    const location = arr.join(',');
    if (location in memo) return memo[location];
    if (arr[0] === 0 || arr[1] === 0) return 0;
    if (arr[0] === 1 || arr[1] === 1) return 1;
    return (memo[location] =
        gridTraverseMemo([arr[0] - 1, arr[1]], memo) +
        gridTraverseMemo([arr[0], arr[1] - 1], memo));
}

module.exports = { gridTraverse, gridTraverseMemo };
