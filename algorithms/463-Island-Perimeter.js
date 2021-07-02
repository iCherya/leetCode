// 463. Island Perimeter [Easy]
// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
    let totalPerimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let cellPerimeter = 4;

                if (i - 1 >= 0 && grid[i - 1][j] === 1) cellPerimeter -= 1;
                if (i + 1 < grid.length && grid[i + 1][j] === 1) cellPerimeter -= 1;
                if (j - 1 >= 0 && grid[i][j - 1] === 1) cellPerimeter -= 1;
                if (j + 1 < grid[0].length && grid[i][j + 1] === 1) cellPerimeter -= 1;

                totalPerimeter += cellPerimeter;
            }
        }
    }

    return totalPerimeter;
};
