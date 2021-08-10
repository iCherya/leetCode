// 926. Flip String to Monotone Increasing [Medium]
// https://leetcode.com/problems/flip-string-to-monotone-increasing/

/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = (s) => {
    let ones = 0;
    let flips = 0;

    for (const char of s) {
        char === '1' ? ones++ : flips++;
        flips = Math.min(flips, ones);
    }

    return flips;
};
