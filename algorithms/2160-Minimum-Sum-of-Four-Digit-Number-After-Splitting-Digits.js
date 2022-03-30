// 2160. Minimum Sum of Four Digit Number After Splitting Digits [Easy]
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) =>
  String(num)
    .split('')
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((acc, curr, idx) => acc[idx % 2].push(curr) && acc, [[], []])
    .map((el) => el.join(''))
    .reduce((acc, curr) => acc + Number(curr), 0);
