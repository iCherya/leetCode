// 300. Longest Increasing Subsequence [Medium]
// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
    if (!nums.length) return 0;

    const dp = new Array(nums.length).fill(1);
    let max = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(dp[i], max);
            }
        }
    }

    return max;
};
