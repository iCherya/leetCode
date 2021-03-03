/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    nums.sort((a, b) => b - a);

    return (nums[0] - 1) * (nums[1] - 1);
};
