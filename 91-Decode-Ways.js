/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s.charAt(0) == '0' ? 0 : 1;

    for (let i = 2; i < dp.length; i++) {
        if (s[i - 1] != '0') {
            dp[i] += dp[i - 1];
        }

        const twoDigit = parseInt(s.substring(i - 2, i));

        if (twoDigit > 9 && twoDigit < 27) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};
