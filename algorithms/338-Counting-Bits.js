// 338. Counting Bits [Easy]
// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) =>
    new Array(n + 1)
        .fill(null)
        .map((_, idx) => idx.toString(2).split('').map(Number).filter(Boolean).length);
