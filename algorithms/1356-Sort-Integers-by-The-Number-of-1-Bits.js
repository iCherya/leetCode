// 1356. Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) =>
    arr
        .map((el) => [el, (el.toString(2).match(/1/g) || []).length])
        .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
        .map(([num]) => num);
