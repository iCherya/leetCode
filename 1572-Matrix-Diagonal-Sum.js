/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
    let result = 0;
    const len = mat[0].length;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            result += mat[i][j];
            i++;
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j >= 0; j--) {
            result += mat[i][j];
            i++;
        }
    }

    if (len % 2 !== 0) {
        result -= mat[Math.floor(len / 2)][Math.floor(len / 2)];
    }

    return result;
};
