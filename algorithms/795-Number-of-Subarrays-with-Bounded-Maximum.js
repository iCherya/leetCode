// 795. Number of Subarrays with Bounded Maximum [Medium]
// https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = (nums, left, right) => {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let max = 0;

        for (let j = i; j < nums.length; j++) {
            max = Math.max(max, nums[j]);

            if (left <= max && max <= right) result++;
        }
    }

    return result;
};
