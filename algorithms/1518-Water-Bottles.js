// 1518. Water Bottles [Easy]
// https://leetcode.com/problems/water-bottles/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
    let result = numBottles;
    let freeBottles = numBottles;

    while (freeBottles / numExchange >= 1) {
        numBottles = parseInt(freeBottles / numExchange);
        freeBottles -= numBottles * numExchange;
        result += numBottles;
        freeBottles += numBottles;
    }

    return result;
};
