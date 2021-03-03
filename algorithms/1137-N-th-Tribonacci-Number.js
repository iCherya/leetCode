/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n, memo = {}) => {
    if (n < 2) return n;
    if (n === 2) return 1;
    if (memo[n]) return memo[n];

    memo[n - 1] = tribonacci(n - 1, memo);
    memo[n - 2] = tribonacci(n - 2, memo);
    memo[n - 3] = tribonacci(n - 3, memo);

    return memo[n - 1] + memo[n - 2] + memo[n - 3];
};
