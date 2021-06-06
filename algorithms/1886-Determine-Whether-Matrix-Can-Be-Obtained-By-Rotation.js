/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
    const rotate = (matrix) => {
        const len = matrix.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (i === j) break;

                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        for (let i = 0; i < len; i++) {
            matrix[i].reverse();
        }
    };

    let times = 4;

    main: while (times > 0) {
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if (mat[i][j] !== target[i][j]) {
                    times--;
                    rotate(mat);
                    continue main;
                }
            }
        }

        return true;
    }

    return false;
};
