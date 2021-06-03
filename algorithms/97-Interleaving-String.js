/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) return false;

    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1));

    for (let i = 0; i < m + 1; i++)
        for (let j = 0; j < n + 1; j++) {
            if (i === 0) dp[i][j] = s2.substring(0, j) === s3.substring(0, j);
            if (j === 0) dp[i][j] = s1.substring(0, i) === s3.substring(0, i);
        }

    for (let i = 1; i < m + 1; i++)
        for (let j = 1; j < n + 1; j++) {
            if (s1.charAt(i - 1) === s3.charAt(i + j - 1) && dp[i - 1][j]) dp[i][j] = true;
            else if (s2.charAt(j - 1) === s3.charAt(i + j - 1) && dp[i][j - 1]) dp[i][j] = true;
            else dp[i][j] = false;
        }

    return dp[m][n];
};
