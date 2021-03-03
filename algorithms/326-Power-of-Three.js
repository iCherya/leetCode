/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
    const arr = [1, 3];
    let number = 3;

    let i = 0;
    while (number <= n) {
        number *= 3;
        arr.push(number);
        i++;
    }

    return arr.includes(n);
};
