/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
    const len = grid.length;
    if (len === 0 || grid[0][0] || grid[len - 1][len - 1]) return -1;

    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    const distance = 0;

    const queue = [];
    queue.push([0, 0, distance + 1]);

    for (const [i, j, dist] of queue) {
        if (i === len - 1 && j === len - 1) return dist;

        for (const [x, y] of directions) {
            const newI = i + x;
            const newJ = j + y;

            if (newI >= 0 && newI < len && newJ >= 0 && newJ < len && !grid[newI][newJ]) {
                queue.push([newI, newJ, dist + 1]);
                grid[newI][newJ] = 1;
            }
        }
    }

    return -1;
};
