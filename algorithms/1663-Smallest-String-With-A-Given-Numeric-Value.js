/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = (n, k) => {
    const result = [];
    const charCodeDiff = 97;

    while (result.length < n) {
        const maxCharNum = k - n > 25 ? 25 : k - n;
        const char = String.fromCharCode(charCodeDiff + maxCharNum);

        result.push(char);
        k -= maxCharNum;
    }

    return result.reverse().join('');
};
