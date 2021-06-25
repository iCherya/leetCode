// 576. Out of Boundary Paths [Medium]
// https://leetcode.com/problems/out-of-boundary-paths/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
const findPaths = (m, n, maxMove, startRow, startColumn) => {
    const map = new Map();
    const MOD = 10 ** 9 + 7;

    const getWays = (row, col, move) => {
        const key = `${row}--${col}--${move}`;

        if (map.has(key)) return map.get(key);
        if (move > maxMove) return 0;
        if (row < 0 || col < 0 || row >= m || col >= n) return 1;

        const count =
            (getWays(row + 1, col, move + 1) +
                getWays(row - 1, col, move + 1) +
                getWays(row, col + 1, move + 1) +
                getWays(row, col - 1, move + 1)) %
            MOD;

        map.set(key, count);
        return count;
    };

    return getWays(startRow, startColumn, 0);
};
