// 1523. Count Odd Numbers in an Interval Range [Easy]
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
    let result = 0;

    if (low % 2) {
        result += 1;
        low += 1;
    }

    if (high % 2) {
        result += 1;
        high -= 1;
    }

    result += (high - low) / 2;

    return result;
};
