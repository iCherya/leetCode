/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = (matrix, target) => {
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i = 1; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j] += matrix[i - 1][j];
        }
    }

    let ans = 0;
    for (let i = 0; i < row; i++) {
        for (let j = i; j < row; j++) {
            const map = new Map();
            map.set(0, 1);

            let sum = 0;
            for (let k = 0; k < col; k++) {
                sum += matrix[j][k] - (i !== 0 ? matrix[i - 1][k] : 0);
                ans += map.get(sum - target) || 0;
                map.set(sum, (map.get(sum) || 0) + 1);
            }
        }
    }

    return ans;
};
