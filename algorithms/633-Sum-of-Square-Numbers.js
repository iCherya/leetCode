// 633. Sum of Square Numbers [Medium]
// https://leetcode.com/problems/sum-of-square-numbers/

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
    const numbers = [0, 0];

    for (let i = 1; i <= Math.sqrt(c); i++) {
        numbers.push(i ** 2, i ** 2);
    }

    return twoSum(numbers, c);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
