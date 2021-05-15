/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = (s) => {
    if (s.includes('Infinity')) return false;

    return !Number.isNaN(+s);
};
