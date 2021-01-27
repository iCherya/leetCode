/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
    let product = 1;
    let sum = 0;

    for (const num of n.toString()) {
        product *= +num;
        sum += +num;
    }

    return product - sum;
};
