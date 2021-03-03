/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (rows < 1 || cols < 1) return false;

    let row = 0;
    let col = cols - 1;

    while (0 <= row && row < rows && 0 <= col && col < cols) {
        const value = matrix[row][col];

        if (value === target) return true;
        else if (value > target) col -= 1;
        else row += 1;
    }

    return false;
};
