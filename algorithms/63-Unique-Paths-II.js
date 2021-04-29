/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    const m = obstacleGrid.length;
    if (m === 0) return 0;

    const n = obstacleGrid[0].length;
    if (n === 0) return 1;

    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 0) dp[i] = 1;
        else break;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) dp[j] = 0;
            else dp[j] += dp[j - 1] || 0;
        }
    }

    return dp[n - 1];
};
