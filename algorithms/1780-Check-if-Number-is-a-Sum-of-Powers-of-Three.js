/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = (n) => {
    const str = n.toString(3);

    return /^[10]+$/.test(str);
};
