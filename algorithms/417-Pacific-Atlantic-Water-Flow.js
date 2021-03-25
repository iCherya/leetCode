const explore = (h, row, col, rowLen, colLen, matrix, discovered) => {
    if (row < 0 || col < 0) return 1;
    if (row === rowLen || col === colLen) return 2;
    if (h < matrix[row][col]) return 0;

    if (discovered[row][col] === -Infinity) {
        const ch = matrix[row][col];
        discovered[row][col] = 0;

        const result =
            explore(ch, row - 1, col, rowLen, colLen, matrix, discovered) |
            explore(ch, row + 1, col, rowLen, colLen, matrix, discovered) |
            explore(ch, row, col - 1, rowLen, colLen, matrix, discovered) |
            explore(ch, row, col + 1, rowLen, colLen, matrix, discovered);
        discovered[row][col] = -Infinity;

        return result;
    }
    return discovered[row][col];
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
    const result = [];

    const rowLen = matrix.length;
    if (rowLen === 0) return result;

    const colLen = matrix[0].length;
    if (colLen === 0) return result;

    const discovered = [];
    for (let row = 0; row < rowLen; row += 1) {
        discovered[row] = [];
        for (let col = 0; col < colLen; col += 1) {
            discovered[row][col] = -Infinity;
        }
    }

    for (let row = 0; row < rowLen; row += 1) {
        for (let col = 0; col < colLen; col += 1) {
            discovered[row][col] = explore(
                matrix[row][col],
                row,
                col,
                rowLen,
                colLen,
                matrix,
                discovered
            );

            if (discovered[row][col] === 3) result.push([row, col]);
        }
    }

    return result;
};
