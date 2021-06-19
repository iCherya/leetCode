// 629. K Inverse Pairs Array [Hard]
// https://leetcode.com/problems/k-inverse-pairs-array/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = (n, k) => {
    const MOD = 10 ** 9 + 7;
    const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = 1;
    }

    for (let i = 2; i < n + 1; i++) {
        for (let j = 1; j < k + 1; j++) {
            const cond = j < i ? 0 : dp[i - 1][j - i];
            dp[i][j] = (dp[i][j - 1] + dp[i - 1][j] - cond) % MOD;
            if (dp[i][j] < 0) dp[i][j] += MOD;
        }
    }

    return dp.pop().pop();
};
