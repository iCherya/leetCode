/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = (n) => {
    let week = 1;
    let total = 0;
    let deposit = 1;
    let counter = 1;

    while (counter < n) {
        if (counter % 7 === 0) {
            deposit = week;
            week++;
        }

        deposit++;
        total += deposit;

        counter++;
    }

    return total + 1;
};
