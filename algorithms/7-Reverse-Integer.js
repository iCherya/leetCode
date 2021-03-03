/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const multiplicator = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    return reversed < 2 ** 31 ? multiplicator * reversed : 0;
};
