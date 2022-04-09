// 347. Top K Frequent Elements [Medium]
// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const hashMap = nums.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(hashMap)
    .sort((a, b) => b[1] - a[1])
    .map(([num]) => Number(num))
    .slice(0, k);
};
