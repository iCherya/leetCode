// 189. Rotate Array [Medium]
// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    if (k > nums.length) k = k % nums.length;
    if (nums.length === 1 || k === 0) return;

    nums.unshift(...nums.slice(-k));
    nums.splice(nums.length - k, k);
};
