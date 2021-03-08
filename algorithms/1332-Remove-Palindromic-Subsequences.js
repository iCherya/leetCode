/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = (s) => {
    if (s === '') return 0;
    if (s === s.split('').reverse().join('')) return 1;

    return 2;
};
