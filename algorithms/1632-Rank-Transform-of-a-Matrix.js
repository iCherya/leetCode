// 1632. Rank Transform of a Matrix [Hard]
// https://leetcode.com/problems/rank-transform-of-a-matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrixRankTransform = (matrix) => {
    const find = (map, i) => {
        if (map[i] !== i) map[i] = find(map, map[i]);
        return map[i];
    };

    const n = matrix.length;
    const m = matrix[0].length;
    const rank = new Array(n + m).fill(0);
    const map = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!map[matrix[i][j]]) map[matrix[i][j]] = [];
            map[matrix[i][j]].push([i, j]);
        }
    }

    Object.keys(map)
        .sort((a, b) => a - b)
        .forEach((el) => {
            const p = new Array(m + n).fill(null).map((_, idx) => idx);
            const tempRank = [...rank];

            for (let [i, j] of map[el]) {
                i = find(p, i);
                j = find(p, j + n);
                p[i] = j;

                tempRank[j] = Math.max(tempRank[i], tempRank[j]);
            }

            for (const [i, j] of map[el]) {
                rank[i] = rank[j + n] = matrix[i][j] = tempRank[find(p, i)] + 1;
            }
        });

    return matrix;
};
