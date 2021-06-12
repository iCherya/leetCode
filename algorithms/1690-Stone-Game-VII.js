/**
 * @param {number[]} stones
 * @return {number}
 */
const stoneGameVII = (stones) => {
    const minDiff = (stones, left, right) => {
        if (left === right) return 0;

        if (right < left) return 0;

        if (dp[left][right] !== Infinity) return dp[left][right];

        const ll = stones[left + 1] + minDiff(stones, left + 2, right);
        const rr = stones[right - 1] + minDiff(stones, left, right - 2);
        const minlr = minDiff(stones, left + 1, right - 1);
        const lr = stones[right] + minlr;
        const rl = stones[left] + minlr;

        if (Math.min(ll, lr) < Math.min(rr, rl)) dp[left][right] = Math.min(rr, rl);
        else dp[left][right] = Math.min(ll, lr);

        return dp[left][right];
    };

    const size = stones.length;
    const dp = new Array(size).fill(null).map(() => new Array(size).fill(Infinity));

    return minDiff(stones, 0, size - 1);
};

console.log(stoneGameVII([5, 3, 1, 4, 2]));
