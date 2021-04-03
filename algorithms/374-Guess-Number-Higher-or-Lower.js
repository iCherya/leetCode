/* global guess */
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
    let from = 0;
    let to = n;

    while (from <= to) {
        const middle = Math.floor((from + to) / 2);
        const target = guess(middle);

        if (target === 0) {
            return middle;
        }
        if (target === 1) from = middle + 1;

        if (target === -1) to = middle - 1;
    }
};
