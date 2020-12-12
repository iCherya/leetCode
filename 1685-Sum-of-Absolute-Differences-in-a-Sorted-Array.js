/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = (nums) => {
    const result = new Array(nums.length).fill(0);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        result[i] += nums[i] * i - sum;
        sum += nums[i];
    }

    sum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
        result[i] += sum - nums[i] * (nums.length - i);
    }

    return result;
};
