// 724. Find Pivot Index [Easy]
// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < nums.length; i += 1) {
    if (leftSum === rightSum - nums[i]) {
      return i;
    }

    leftSum += nums[i];
    rightSum -= nums[i];
  }

  return -1;
};
