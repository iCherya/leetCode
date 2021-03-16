/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    let buy = -prices[0];
    let preBuy = 0;
    let sell = 0;
    let preSell = 0;

    prices.forEach((p) => {
        preBuy = buy;
        buy = Math.max(preBuy, preSell - p);
        sell = Math.max(preBuy + p - fee, preSell);
        preSell = sell;
    });

    return sell;
};
