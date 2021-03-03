/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = (n) => {
    let result = 0;

    while (n > 1) {
        const matches = Math.floor(n / 2);
        result += matches;
        n -= matches;
    }

    return result;
};
