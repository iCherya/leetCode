/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
    const memo = [];

    for (let i = 0; i < m + 1; i += 1) {
        const subArr = [];
        for (let j = 0; j < n + 1; j += 1) {
            subArr.push(0);
        }
        memo.push(subArr);
    }

    for (const string of strs) {
        const zerosCount = string.split('').filter((el) => el === '0').length;
        const onesCount = string.length - zerosCount;

        for (let i = m; i >= zerosCount; i -= 1) {
            for (let j = n; j >= onesCount; j -= 1) {
                const score = memo[i - zerosCount][j - onesCount] + 1;
                if (score > memo[i][j]) memo[i][j] = score;
            }
        }
    }

    return memo[m][n];
};
