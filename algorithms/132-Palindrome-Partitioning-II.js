// 132. Palindrome Partitioning II [Hard]
// https://leetcode.com/problems/palindrome-partitioning-ii/

/**
 * @param {string} s
 * @return {number}
 */
const minCut = (s) => {
    const len = s.length;

    const dp = new Array(len + 1).fill(null).map(() => new Array(len + 1).fill(false));
    const result = new Array(len).fill(Infinity);

    for (let i = 0; i < len; i++) {
        result[i] = i;

        for (let j = 0; j <= i; j++) {
            if (s.charAt(i) === s.charAt(j) && (j + 1 > i - 1 || dp[j + 1][i - 1])) {
                dp[j][i] = true;

                if (j === 0) result[i] = 0;
                else result[i] = Math.min(result[i], result[j - 1] + 1);
            }
        }
    }

    return result[len - 1];
};
