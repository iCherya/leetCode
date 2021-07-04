// 1920. Build Array from Permutation [Easy]
// https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums) => {
    const result = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
    }

    return result;
};
