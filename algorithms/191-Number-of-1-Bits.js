/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let counter = 0;

    while (n > 0) {
        if (n % 2 === 1) counter++;
        n = Math.floor(n / 2);
    }

    return counter;
};
