// 363. Max Sum of Rectangle No Larger Than K [Hard]
// https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const maxSumSubmatrix = (matrix, k) => {
    let max = -Infinity;
    const sums = Array(matrix.length);

    for (let p = 0; p < matrix[0].length; p++) {
        sums.fill(0);

        for (let l = p; l < matrix[0].length; l++) {
            for (let row = 0; row < matrix.length; row++) {
                sums[row] += matrix[row][l];
            }

            for (let i = 0; i < matrix.length; i++) {
                let sum = 0;

                for (let j = i; j < matrix.length; j++) {
                    sum += sums[j];
                    if (sum > max && sum <= k) {
                        max = sum;
                    }
                }
            }
        }
    }

    return max;
};
