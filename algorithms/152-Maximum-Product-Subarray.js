/**
 * 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let max = -Infinity;

  for (let i = 0; i < nums.length; ++i) {
    let currentProduct = 1;

    for (let j = i; j < nums.length; ++j) {
      currentProduct *= nums[j];
      max = Math.max(max, currentProduct);
    }
  }

  return max;
};
