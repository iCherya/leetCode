/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    if (!nums || !nums.length) return 0;

    const sums = { 0: 1 };
    let currentSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (sums[currentSum - k]) {
            count += sums[currentSum - k];
        }

        sums[currentSum] = sums[currentSum] ? sums[currentSum] + 1 : 1;
    }

    return count;
};
