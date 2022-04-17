// 747. Largest Number At Least Twice of Others [Easy]
// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  const maxNum = Math.max(...nums);
  const maxIndex = nums.indexOf(maxNum);
  nums.splice(maxIndex, 1);

  if (nums.find((num) => num > maxNum / 2)) {
    return -1;
  }

  return maxIndex;
};
