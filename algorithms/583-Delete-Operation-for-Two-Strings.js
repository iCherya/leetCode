/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
    const lcs = (s1, s2, m, n, memo) => {
        if (m === 0 || n === 0) return 0;
        if (memo[m][n] > 0) return memo[m][n];

        if (s1.charAt(m - 1) === s2.charAt(n - 1)) {
            memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1, memo);
        } else {
            memo[m][n] = Math.max(lcs(s1, s2, m, n - 1, memo), lcs(s1, s2, m - 1, n, memo));
        }

        return memo[m][n];
    };

    const m = word1.length;
    const n = word2.length;
    const memo = new Array(m + 1);

    for (let i = 0; i < m + 1; i++) {
        memo[i] = new Array(n + 1);
    }

    return m + n - 2 * lcs(word1, word2, m, n, memo);
};
