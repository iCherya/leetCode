/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
    let i = 0;
    let candidate = 0;

    while (candidate <= num) {
        candidate = Math.pow(i, 2);
        if (candidate === num) return true;
        i++;
    }

    return false;
};
