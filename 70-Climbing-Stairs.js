/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n, memo = {}) => {
    if (n <= 3) return n;
    if (n in memo) return memo[n];

    memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
    return memo[n];
};
