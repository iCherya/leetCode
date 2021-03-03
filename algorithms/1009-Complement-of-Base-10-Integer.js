/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = (N) => {
    const str = N.toString(2);
    let result = '';

    for (const char of str) {
        if (char === '0') {
            result += '1';
        } else {
            result += '0';
        }
    }

    return parseInt(result, 2);
};
