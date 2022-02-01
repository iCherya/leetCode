// 121. Best Time to Buy and Sell Stock [Easy]
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minimumPrice = prices[0];
  let maximumProfit = 0;

  prices.forEach((price) => {
    maximumProfit = Math.max(maximumProfit, price - minimumPrice);
    minimumPrice = Math.min(minimumPrice, price);
  });

  return maximumProfit;
};
