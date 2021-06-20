// 778. Swim in Rising Water [Hard]
// https://leetcode.com/problems/swim-in-rising-water/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = (grid) => {
    const visited = new Set();
    const size = grid.length;

    const dfs = (row, col, max) => {
        if (
            row < 0 ||
            row > size - 1 ||
            col < 0 ||
            col > size - 1 ||
            max < grid[row][col] ||
            visited.has(size * row + col)
        )
            return;

        visited.add(row * size + col);

        dfs(row, col + 1, max);
        dfs(row, col - 1, max);
        dfs(row + 1, col, max);
        dfs(row - 1, col, max);
    };

    let result = 0;
    let low = 0;
    let high = size ** 2 - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        dfs(0, 0, middle);

        if (visited.has(size ** 2 - 1)) {
            high = middle - 1;
            result = middle;
        } else {
            low = middle + 1;
        }

        visited.clear();
    }

    return result;
};
