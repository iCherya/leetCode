// 566. Reshape the Matrix [Easy]
// https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (matrix, rows, columns) => {
    if (matrix.length * matrix[0].length !== rows * columns) return matrix;

    const flatten = matrix.flat();
    const result = [];

    while (flatten.length) result.push([...flatten.splice(0, columns)]);

    return result;
};
