/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
    const isPositive = (dividend <= 0 && divisor <= 0) || (dividend > 0 && divisor > 0);
    const log = Math.log(Math.abs(dividend)) - Math.log(Math.abs(divisor));
    const result = Math.floor(Math.exp(log));
    const max = 2 ** 31 - 1;

    if (isPositive) {
        return result > max ? max : result;
    } else {
        return 0 - (result > max ? max + 1 : result);
    }
};
