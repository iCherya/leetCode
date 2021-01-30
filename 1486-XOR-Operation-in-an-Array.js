/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
    let result = 0;

    while (n > 0) {
        result ^= start;
        start += 2;
        n--;
    }

    return result;
};
