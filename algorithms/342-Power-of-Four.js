/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
    const arr = [1, 4];
    let number = 4;

    while (number <= n) {
        number *= 4;
        arr.push(number);
    }

    return arr.includes(n);
};
