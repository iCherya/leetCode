// 2006. Count Number of Pairs With Absolute Difference K [Easy]
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (Math.abs(nums[i] - nums[j] === k)) count += 1;
    }
  }

  return count;
};
