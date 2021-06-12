/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = (nums) => {
    let maxSum = nums[0];
    let currentSum = maxSum;

    for (let i = 1; i < nums.length; i++) {
        const previous = nums[i - 1];
        const current = nums[i];

        if (previous < current) currentSum += current;
        else currentSum = current;

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
