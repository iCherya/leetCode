// 1913. Maximum Product Difference Between Two Pairs [Easy]
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
    nums.sort((a, b) => b - a);

    return nums[0] * nums[1] - nums.pop() * nums.pop();
};
