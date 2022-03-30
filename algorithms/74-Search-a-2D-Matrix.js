// 74. Search a 2D Matrix [Medium]
// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const row = matrix.length;
  const col = matrix[0].length;

  let i = 0;
  let j = col - 1;

  while (i < row && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return false;
};
