// 172. Factorial Trailing Zeroes [Easy]
// https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
    let counter = 0;

    while (n >= 5) {
        counter += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return counter;
};
