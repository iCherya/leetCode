// 16. 3Sum Closest [Medium]
// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);

    let left;
    let right;
    let currentSum;
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        left = i + 1;
        right = nums.length - 1;

        while (left < right) {
            currentSum = nums[left] + nums[i] + nums[right];

            const currentDiff = Math.abs(target - currentSum);
            const closestDiff = Math.abs(target - closestSum);

            if (currentDiff < closestDiff) closestSum = currentSum;

            if (currentSum < target) left += 1;
            else right -= 1;
        }
    }

    return closestSum;
};
