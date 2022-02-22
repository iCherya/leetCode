// 171. Excel Sheet Column Number [Easy]
// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) =>
  columnTitle
    .split('')
    .map((letter) => letter.toLowerCase().charCodeAt(0) - 96)
    .reverse()
    .reduce((acc, curr, idx) => acc + 26 ** idx * curr, 0);
