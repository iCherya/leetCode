// 190. Reverse Bits [Easy]
// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) =>
    parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
