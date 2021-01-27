/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
    let negativeCount = 0;

    main: for (let i = grid.length - 1; i >= 0; i--) {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            if (grid[i][j] < 0) negativeCount++;
            else continue main;
        }
    }

    return negativeCount;
};
