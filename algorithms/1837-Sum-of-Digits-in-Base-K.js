/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = (n, k) =>
    n
        .toString(k)
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
