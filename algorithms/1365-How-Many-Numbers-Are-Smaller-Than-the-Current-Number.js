/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b);

    return nums.map((el) => sorted.indexOf(el));
};
