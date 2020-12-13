/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let sum = (nums.length / 2) * (nums.length + 1);

    for (const number of nums) {
        sum -= number;
    }

    return sum;
};
