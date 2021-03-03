/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    const result = [];
    let sum = nums[0];
    result.push(sum);

    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
};
