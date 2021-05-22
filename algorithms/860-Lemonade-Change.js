/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
    const change = {
        five: 0,
        ten: 0
    };

    for (const payment of bills) {
        if (payment === 5) {
            change.five++;
        } else if (payment === 10 && change.five) {
            change.five--;
            change.ten++;
        } else if (payment === 20 && change.five && change.ten) {
            change.five--;
            change.ten--;
        } else if (payment === 20 && change.five >= 3) {
            change.five -= 3;
        } else return false;
    }

    return true;
};
