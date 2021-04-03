/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = (mat) => {
    const m = mat.length;
    const n = mat[0].length;
    const data = {};

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const num = mat[i][j];
            !data[i - j] && (data[i - j] = []);
            data[i - j].push(num);
        }
    }

    for (const diagonal of Object.values(data)) {
        diagonal.sort((a, b) => a - b);
    }

    // eslint-disable-next-line no-unused-vars
    const result = mat.map((_) => new Array(n).fill(null));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            result[i][j] = data[i - j].pop();
        }
    }

    return result;
};
