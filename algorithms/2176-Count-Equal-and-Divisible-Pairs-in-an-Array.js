// 2176. Count Equal and Divisible Pairs in an Array [Easy]
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const isEqual = nums[i] === nums[j];
      const isDivisible = (i * j) % k === 0;

      if (isEqual && isDivisible) {
        count += 1;
      }
    }
  }

  return count;
};
