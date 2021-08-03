// 643. Maximum Average Subarray I [Easy]
// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let slidingSum = nums.slice(0, k).reduce((a, c) => a + c, 0);
    const sums = [slidingSum];

    for (let i = k; i < nums.length; i++) {
        const left = nums[i - k];
        const right = nums[i];

        slidingSum += right - left;
        sums.push(slidingSum);
    }

    return (Math.max(...sums) / k).toFixed(5);
};
