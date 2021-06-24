// 1903. Largest Odd Number in String [Easy]
// https://leetcode.com/problems/largest-odd-number-in-string/

/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2) return num.slice(0, i + 1);
    }

    return '';
};
