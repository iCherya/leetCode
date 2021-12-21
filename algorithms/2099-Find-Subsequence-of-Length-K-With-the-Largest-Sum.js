// 2099. Find Subsequence of Length K With the Largest Sum
// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = (nums, k) =>
  nums
    .map((num, idx) => ({ num, idx }))
    .sort((a, b) => b.num - a.num)
    .slice(0, k)
    .sort((a, b) => a.idx - b.idx)
    .map(({ num }) => num);
