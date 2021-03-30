/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {
    const len = envelopes.length;
    if (len < 2) return len;

    const dp = new Array(len).fill(1);
    envelopes.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

    let max = 0;
    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < i; j += 1) {
            const isFitsWidth = envelopes[i][0] > envelopes[j][0];
            const isFitsHeight = envelopes[i][1] > envelopes[j][1];

            if (isFitsWidth && isFitsHeight) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }

            max = Math.max(dp[i], max);
        }
    }

    return max;
};
