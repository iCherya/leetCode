/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = (accounts) => {
    let max = -Infinity;

    accounts.forEach((el) => {
        const sum = el.reduce((acc, cur) => acc + cur, 0);
        if (sum > max) {
            max = sum;
        }
    });

    return max;
};
