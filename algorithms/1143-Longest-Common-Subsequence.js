/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (a, b) => {
    const n = a.length;
    const m = b.length;

    const d = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        d[i] = new Array(m + 1).fill(0);
    }
    for (let j = 1; j <= m; j++) {
        for (let i = 1; i <= n; i++) {
            if (a[i - 1] === b[j - 1]) {
                d[i][j] = d[i - 1][j - 1] + 1;
            } else {
                d[i][j] = Math.max(d[i][j - 1], d[i - 1][j]);
            }
        }
    }

    let y = d.length - 1;
    let z = d[0].length - 1;

    return d[y][z];
};
