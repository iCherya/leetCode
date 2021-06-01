/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    const rowLength = grid.length;
    const columnLength = grid[0].length;
    let max = 0;

    const dfs = (rowIndex, columnIndex) => {
        if (
            rowIndex < 0 ||
            columnIndex < 0 ||
            rowIndex >= rowLength ||
            columnIndex >= columnLength ||
            grid[rowIndex][columnIndex] === 0
        )
            return 0;

        grid[rowIndex][columnIndex] = 0;

        return (
            1 +
            dfs(rowIndex + 1, columnIndex) +
            dfs(rowIndex - 1, columnIndex) +
            dfs(rowIndex, columnIndex + 1) +
            dfs(rowIndex, columnIndex - 1)
        );
    };

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(i, j));
            }
        }
    }

    return max;
};
