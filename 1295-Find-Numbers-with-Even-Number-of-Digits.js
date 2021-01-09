/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => nums.filter((el) => el.toString().length % 2 === 0).length;
