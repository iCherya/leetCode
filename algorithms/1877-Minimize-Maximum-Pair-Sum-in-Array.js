/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = (nums) => {
    nums.sort((a, b) => a - b);
    const pairs = [];

    for (let i = 0; i < nums.length / 2; i++) {
        pairs.push([nums[i], nums[nums.length - i - 1]]);
    }

    return Math.max(...pairs.map(([a, b]) => a + b));
};
