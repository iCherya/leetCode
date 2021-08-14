// 73. Set Matrix Zeroes [Medium]
// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const candidates = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                candidates.push([i, j]);
            }
        }
    }

    for (const [i, j] of candidates) {
        for (let k = 0; k < cols; k++) {
            matrix[i][k] = 0;
        }

        for (let k = 0; k < rows; k++) {
            matrix[k][j] = 0;
        }
    }

    return matrix;
};
