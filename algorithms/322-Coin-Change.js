/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const minNumCoins = [];
    minNumCoins[0] = 0;

    for (let m = 1; m <= amount; m += 1) {
        minNumCoins[m] = Infinity;
        for (let i = 0; i < coins.length; i += 1) {
            if (m >= coins[i]) {
                const numCoins = minNumCoins[m - coins[i]] + 1;

                if (numCoins < minNumCoins[m]) {
                    minNumCoins[m] = numCoins;
                }
            }
        }
    }

    return minNumCoins[amount] === Infinity ? -1 : minNumCoins[amount];
};
