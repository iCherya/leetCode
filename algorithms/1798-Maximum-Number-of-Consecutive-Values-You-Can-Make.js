/**
 * @param {number[]} coins
 * @return {number}
 */
const getMaximumConsecutive = (coins) => {
    coins.sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < coins.length; i += 1) {
        if (coins[i] <= result + 1) {
            result += coins[i];
        } else break;
    }

    return result + 1;
};
