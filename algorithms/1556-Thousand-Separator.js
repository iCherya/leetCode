/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = (n) => {
    const arr = n.toString().split('').reverse();

    for (let i = arr.length - 1; i >= 1; i--) {
        if (i % 3 === 0) {
            arr.splice(i, 0, '.');
        }
    }

    return arr.reverse().join('');
};
