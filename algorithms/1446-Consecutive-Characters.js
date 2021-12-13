// 1446. Consecutive Characters [Easy]
// https://leetcode.com/problems/consecutive-characters/

/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
  let max = 1;
  let left = 0;
  let right = 1;

  let counter = 1;

  while (s[right]) {
    if (s[left] === s[right]) {
      right += 1;
      counter += 1;
      max = Math.max(counter, max);
    } else {
      left = right;
      counter = 0;
    }
  }

  return max;
};
