/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    const bounce = {
        min: -Math.pow(2, 31),
        max: Math.pow(2, 31) - 1
    };

    let res = parseInt(s);

    if (isNaN(res)) res = 0;
    if (res < bounce.min) res = bounce.min;
    if (res > bounce.max) res = bounce.max;

    return res;
};
