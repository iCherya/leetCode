/**
 * @param {number} n
 * @return {number}
 */
const minOperations = (n) => {
    if (n % 2 === 0) {
        return ((n - 2) / 2 + 1) * ((n - 2) / 2 + 1);
    } else {
        return ((n - 3) / 2 + 1) * ((n - 3) / 2 + 2);
    }
};
