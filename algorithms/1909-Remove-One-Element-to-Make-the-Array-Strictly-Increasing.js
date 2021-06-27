// 1909. Remove One Element to Make the Array Strictly Increasing [Easy]
// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
    const isIncreasing = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            const current = arr[i];
            const next = arr[i + 1];

            if (next <= current) return false;
        }

        return true;
    };

    if (isIncreasing(nums)) return true;

    for (let i = 0; i < nums.length; i++) {
        const candidate = [...nums.slice(0, i), ...nums.slice(i + 1)];
        if (isIncreasing(candidate)) return true;
    }

    return false;
};
