/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    while (n > 6) {
        if (n === 7) return true;
        if (n === 8 || n === 9) return false;

        n = n
            .toString()
            .split('')
            .reduce((acc, curr) => acc + (+curr) ** 2, 0);
    }

    return n === 1;
};
