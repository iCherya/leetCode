/**
 * @param {number} n
 * @return {number}
 */
const fib = (n, memo = {}) => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];

    memo[n - 1] = fib(n - 1, memo);
    memo[n - 2] = fib(n - 2, memo);

    return memo[n - 1] + memo[n - 2];
};
