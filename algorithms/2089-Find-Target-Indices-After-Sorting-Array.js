// 2089. Find Target Indices After Sorting Array
// https://leetcode.com/problems/find-target-indices-after-sorting-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) =>
  nums
    .sort((a, b) => a - b)
    .map((num, idx) => ({ num, idx }))
    .filter(({ num }) => num === target)
    .map(({ idx }) => idx);
