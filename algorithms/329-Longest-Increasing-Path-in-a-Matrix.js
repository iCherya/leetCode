/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
    let longest = 0;
    const hash = {};

    const traverse = (row, col) => {
        if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) return 0;

        const key = `${row}-${col}`;
        if (hash[key]) return hash[key];

        const currentValue = matrix[row][col];
        const upValue = matrix[row - 1] ? matrix[row - 1][col] : null;
        const downValue = matrix[row + 1] ? matrix[row + 1][col] : null;
        const leftValue = matrix[row][col - 1];
        const rightValue = matrix[row][col + 1];

        const upMaxValue = upValue && upValue > currentValue ? traverse(row - 1, col) : 0;
        const downMaxValue = downValue && downValue > currentValue ? traverse(row + 1, col) : 0;
        const leftMaxValue = leftValue && leftValue > currentValue ? traverse(row, col - 1) : 0;
        const rightMaxValue = rightValue && rightValue > currentValue ? traverse(row, col + 1) : 0;

        const result = Math.max(upMaxValue, downMaxValue, leftMaxValue, rightMaxValue) + 1;
        hash[key] = result;

        return result;
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            longest = Math.max(longest, traverse(i, j));
        }
    }

    return longest;
};
