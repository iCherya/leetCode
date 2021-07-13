// 162. Find Peak Element [Medium]
// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const next = nums[i + 1];

        if (curr > next) return i;
    }

    return nums.length - 1;
};
