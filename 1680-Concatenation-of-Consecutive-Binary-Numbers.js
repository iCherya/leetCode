/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = (n) => {
    let result = 0;
    const modulo = Math.pow(10, 9) + 7;

    let i = 1;
    while (i <= n) {
        const pow = i.toString(2).length;
        result *= Math.pow(2, pow) % modulo;
        result += i;
        result %= modulo;
        i++;
    }

    return result;
};
