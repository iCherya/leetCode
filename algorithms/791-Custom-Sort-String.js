// 791. Custom Sort String [Medium]
// https://leetcode.com/problems/custom-sort-string/

/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
const customSortString = (order, str) =>
    str
        .split('')
        .sort((a, b) => order.indexOf(a) - order.indexOf(b))
        .join('');
