// 994. Rotting Oranges [Medium]
// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    const traverse = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
            return Infinity;
        }
        if (grid[i][j] === 2) return 0;

        grid[i][j] = 0;
        let min = Infinity;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for (const [x, y] of directions) {
            min = Math.min(min, traverse(i + x, j + y));
        }

        grid[i][j] = 1;

        return min === Infinity ? min : min + 1;
    };

    let result = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                result = Math.max(traverse(i, j), result);
            }
        }
    }

    return result === Infinity ? -1 : result;
};
