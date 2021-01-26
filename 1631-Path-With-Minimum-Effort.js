/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = (heights) => {
    const adjacencies = [];
    const len = heights[0].length;
    let max = 0;

    const findPath = (i, j, arr, parent) => {
        if (i >= 0 && i < heights.length && j >= 0 && j < len) {
            const index = i * len + j;
            const diff = Math.abs(parent - heights[i][j]);
            max = Math.max(max, diff);
            arr.push([index, diff]);
        }
    };

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            let ind = i * len + j;
            let arr = [];

            findPath(i - 1, j, arr, heights[i][j]);
            findPath(i + 1, j, arr, heights[i][j]);
            findPath(i, j + 1, arr, heights[i][j]);
            findPath(i, j - 1, arr, heights[i][j]);

            adjacencies[ind] = arr;
        }
    }

    const dfs = (threshold) => {
        let visited = new Array(adjacencies.length).fill(false);
        let stack = [adjacencies[0]];
        visited[0] = true;

        while (stack.length > 0) {
            const current = stack.pop();

            for (let i = 0; i < current.length; i++) {
                const [ind, effort] = current[i];

                if (!visited[ind] && effort <= threshold) {
                    if (ind === adjacencies.length - 1) return true;
                    visited[ind] = true;
                    stack.push(adjacencies[ind]);
                }
            }
        }

        return false;
    };

    let low = 0;
    let hight = max;

    while (low < hight) {
        let middle = Math.floor((low + hight) / 2);
        let isCorrect = dfs(middle);
        if (!isCorrect) {
            low = middle + 1;
        } else {
            hight = middle;
        }
    }

    return low;
};
