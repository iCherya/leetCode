// 1984. Minimum Difference Between Highest and Lowest of K Scores [Easy]
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
    nums.sort((a, b) => a - b);

    let minDiff = Infinity;
    let [left, right] = [0, k - 1];

    while (right < nums.length) {
        minDiff = Math.min(minDiff, nums[right++] - nums[left++]);
    }

    return minDiff;
};
