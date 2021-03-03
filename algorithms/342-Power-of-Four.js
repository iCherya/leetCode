/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
    const arr = [1, 4];
    let number = 4;

    let i = 0;
    while (number <= n) {
        number *= 4;
        arr.push(number);
        i++;
    }

    return arr.includes(n);
};
