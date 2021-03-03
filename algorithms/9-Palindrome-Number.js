/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) return false;

    const string = x.toString();
    const len = string.length;
    const maxlen = Math.round(len / 2);

    for (let i = 0; i < maxlen; i++) {
        const firstChar = string[i];
        const lastChar = string[len - 1 - i];

        if (firstChar !== lastChar) {
            return false;
        }
    }

    return true;
};
