/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
    if (n === 1) return true;

    while (n > 1) {
        n = n / 2;
    }

    return n === 1;
};
