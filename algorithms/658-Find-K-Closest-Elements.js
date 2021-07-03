// 658. Find K Closest Elements [Medium]
// https://leetcode.com/problems/find-k-closest-elements/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) =>
    arr
        .sort((a, b) => Math.abs(a - x) - Math.abs(b - x))
        .slice(0, k)
        .sort((a, b) => a - b);
