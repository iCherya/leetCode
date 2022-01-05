// 1769. Minimum Number of Operations to Move All Balls to Each Box [Medium]
// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = (boxes) => {
  const result = [];

  for (let i = 0; i < boxes.length; i += 1) {
    let sum = 0;

    for (let j = 0; j < boxes.length; j += 1) {
      if (i !== j) sum += Math.abs(j - i) * boxes[j];
    }

    result.push(sum);
  }

  return result;
};
