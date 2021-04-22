/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
    let res = 1;

    for (const number of nums) {
        if (number === 0) return 0;
        if (number < 0) res *= -1;
    }

    return res;
};
