/*
 * @param {number[]} nums
 * @return {number}
 */
const maxAbsoluteSum = (nums) => {
    let maxSum = nums[0];
    let minSum = nums[0];
    let maxCurr = nums[0];
    let minCurr = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxCurr = Math.max(nums[i], nums[i] + maxCurr);
        minCurr = Math.min(nums[i], nums[i] + minCurr);
        maxSum = Math.max(maxSum, maxCurr);
        minSum = Math.min(minSum, minCurr);
    }

    return Math.max(Math.abs(maxSum), Math.max(Math.abs(minSum), 0));
};
