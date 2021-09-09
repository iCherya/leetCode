// 198. House Robber [Medium]
// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const [first, second] = nums;
    if (!second) return first;

    const dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(first, second);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[dp.length - 1];
};
