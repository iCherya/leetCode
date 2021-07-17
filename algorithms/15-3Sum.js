// 15. 3Sum [Medium]
// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    return kSum(nums, 0, 3);
};

function twoSum(nums, target) {
    if (!nums.length) return [];
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            left += 1;
        } else if (nums[left] + nums[right] > target) {
            right -= 1;
        } else {
            result.push([nums[left], nums[right]]);
            left += 1;
            right -= 1;
        }
    }

    return result;
}

function kSum(nums, target, k) {
    if (!nums.length) return [];

    const result = [];
    const hashMap = {};

    for (let i = 0; i < nums.length - k + 1; i++) {
        if (k === 2) return twoSum(nums, target);

        const arr = kSum(nums.slice(i + 1), target - nums[i], k - 1);

        if (arr.length) {
            for (const candidate of arr) {
                candidate.push(nums[i]);
                const str = candidate.join('<>');

                if (!hashMap[str]) {
                    hashMap[str] = true;
                    result.push(candidate);
                }
            }
        }
    }

    return result;
}
