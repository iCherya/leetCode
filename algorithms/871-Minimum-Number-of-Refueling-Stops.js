/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
const minRefuelStops = (target, startFuel, stations) => {
    const len = stations.length;

    const dp = new Array(len + 1).fill(0);
    dp[0] = startFuel;

    for (let i = 0; i < len; i++) {
        for (let j = i; j >= 0; j--) {
            if (dp[j] >= stations[i][0]) {
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
            }
        }
    }

    for (let i = 0; i <= len; i++) {
        if (dp[i] >= target) return i;
    }

    return -1;
};
