/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = (s) => {
    if (!s.length) return false;
    if (s.length === 1) return s[0] === '1';

    let ones = 0;
    let zeroes = 0;
    let maxOnes = ones;
    let maxZeroes = zeroes;

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const next = s[i + 1];

        if (current === next) {
            if (current === '1') {
                ones += 1;
                maxOnes = Math.max(maxOnes, ones);
            } else {
                zeroes += 1;
                maxZeroes = Math.max(maxZeroes, zeroes);
            }
        } else {
            ones = 0;
            zeroes = 0;
        }
    }

    return maxOnes > maxZeroes;
};
