class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.dp = this.init(matrix);
    }

    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    init(matrix) {
        const arr = [];

        for (let i = 0; i < matrix.length + 1; i++) {
            const subArr = [];
            for (let j = 0; j < matrix[0].length + 1; j++) {
                subArr.push(0);
            }
            arr.push(subArr);
        }

        for (let i = 1; i < matrix.length + 1; i++) {
            for (let j = 1; j < matrix[0].length + 1; j++) {
                arr[i][j] =
                    matrix[i - 1][j - 1] + arr[i - 1][j] + arr[i][j - 1] - arr[i - 1][j - 1];
            }
        }

        return arr;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return (
            this.dp[row2 + 1][col2 + 1] -
            this.dp[row2 + 1][col1] -
            this.dp[row1][col2 + 1] +
            this.dp[row1][col1]
        );
    }
}
