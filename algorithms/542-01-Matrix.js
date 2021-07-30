// 542. 01 Matrix [Medium]
// https://leetcode.com/problems/01-matrix/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
    const m = mat.length;
    const n = mat[0].length;

    const dp = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dp[i][j] = 0;
            } else {
                if (i > 0) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
                }
                if (j > 0) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
                }
            }
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                if (i < m - 1) {
                    dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
                }
                if (j < n - 1) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
                }
            }
        }
    }

    return dp;
};
