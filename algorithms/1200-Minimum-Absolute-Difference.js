// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i += 1) {
    const current = arr[i];
    const next = arr[i + 1];
    const diff = next - current;

    minDiff = Math.min(minDiff, diff);
  }

  const result = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    const current = arr[i];
    const next = arr[i + 1];
    const expected = current + minDiff;

    if (next === expected) {
      result.push([current, expected]);
    }
  }

  return result;
};
