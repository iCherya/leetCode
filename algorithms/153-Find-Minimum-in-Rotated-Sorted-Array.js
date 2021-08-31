// 153. Find Minimum in Rotated Sorted Array [Medium]
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < nums[right]) return nums[left];

        const middle = Math.floor((left + right) / 2);

        if (nums[middle] >= nums[left]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return nums[left];
};
