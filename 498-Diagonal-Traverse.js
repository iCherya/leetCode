/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = (matrix) => {
    if (matrix.length === 0) return matrix;

    const row = matrix.length;
    const column = matrix[0].length;
    const elements = row * column;
    const result = [];

    let currentRow = 0,
        currentColumn = 0;

    let movingUp = true;
    while (result.length < elements) {
        const current = matrix[currentRow][currentColumn];
        result.push(current);
        if (movingUp) {
            if (currentColumn === column - 1) {
                movingUp = false;
                currentRow++;
            } else if (currentRow === 0) {
                movingUp = false;
                currentColumn++;
            } else {
                currentRow--;
                currentColumn++;
            }
        } else {
            if (currentRow === row - 1) {
                movingUp = true;
                currentColumn++;
            } else if (currentColumn === 0) {
                movingUp = true;
                currentRow++; // go up one row
            } else {
                currentRow++;
                currentColumn--;
            }
        }
    }

    return result;
};
