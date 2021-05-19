/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = (nums) => {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    const median = nums[mid];

    return nums.reduce((acc, curr) => acc + Math.abs(curr - median), 0);
};
