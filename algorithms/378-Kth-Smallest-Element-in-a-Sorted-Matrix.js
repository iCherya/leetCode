// 378. Kth Smallest Element in a Sorted Matrix [Medium]
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => matrix.flat().sort((a, b) => a - b)[k - 1];
