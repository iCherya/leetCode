// 561. Array Partition I [Easy]
// https://leetcode.com/problems/array-partition-i/

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) =>
  nums
    .sort((a, b) => a - b)
    .reduce((acc, curr, idx) => (idx % 2 ? acc : acc + curr), 0);
