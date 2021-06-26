// 315. Count of Smaller Numbers After Self [Hard]
// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
    const sorted = [];
    const counts = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        let left = 0;
        let right = sorted.length;
        const current = nums[i];

        while (left < right) {
            const middle = left + Math.floor((right - left) / 2);
            if (current > sorted[middle]) left = middle + 1;
            else right = middle;
        }

        counts.push(left);
        sorted.splice(left, 0, current);
    }

    return counts.reverse();
};
