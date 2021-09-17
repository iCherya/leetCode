// 54. Spiral Matrix [Medium]
// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    if (matrix.length === 1) return matrix[0];
    if (matrix[0].length === 1) return matrix.flat();

    const travel = [];
    let leftBoundary = 0;
    let rightBoundary = matrix[0].length - 1;
    let upperBoundary = 0;
    let lowerBoundary = matrix.length - 1;

    while (leftBoundary <= rightBoundary && upperBoundary <= lowerBoundary) {
        for (let i = leftBoundary; i <= rightBoundary; i++) {
            travel.push(matrix[upperBoundary][i]);
        }
        upperBoundary++;

        for (let i = upperBoundary; i <= lowerBoundary; i++) {
            travel.push(matrix[i][rightBoundary]);
        }
        rightBoundary--;

        if (upperBoundary <= lowerBoundary) {
            for (let i = rightBoundary; i >= leftBoundary; i--) {
                travel.push(matrix[lowerBoundary][i]);
            }
            lowerBoundary--;
        }

        if (leftBoundary <= rightBoundary) {
            for (let i = lowerBoundary; i >= upperBoundary; i--) {
                travel.push(matrix[i][leftBoundary]);
            }
            leftBoundary++;
        }
    }

    return travel;
};
