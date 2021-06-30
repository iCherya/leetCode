// 1004. Max Consecutive Ones III [Medium]
// https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
    let left = 0;
    let right = 0;

    for (; right < nums.length; right++) {
        if (nums[right] === 0) k -= 1;

        if (k < 0) {
            if (nums[left] === 0) k += 1;
            left += 1;
        }
    }

    return right - left;
};
