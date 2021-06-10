/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxResult = (nums, k) => {
    if (nums.length === 1) return nums[0];

    const dp = new Array(nums.length);

    dp[0] = nums[0];
    const queue = [0];

    for (let i = 1; i < nums.length; i++) {
        while (queue.length > 0 && queue[0] < i - k) {
            queue.shift();
        }
        dp[i] = dp[queue[0]] + nums[i];

        while (queue.length > 0 && dp[i] >= dp[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
    }

    return dp[nums.length - 1];
};
