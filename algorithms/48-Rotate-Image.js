/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const len = matrix.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) break;

            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < len; i++) {
        matrix[i].reverse();
    }
};
