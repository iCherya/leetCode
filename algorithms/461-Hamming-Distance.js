/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) =>
    (x ^ y)
        .toString(2)
        .split('')
        .filter((el) => el === '1').length;
