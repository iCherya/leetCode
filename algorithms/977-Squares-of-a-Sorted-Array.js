/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => nums.map((el) => el * el).sort((a, b) => a - b);
