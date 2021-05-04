/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = (s) => {
    const shift = (c, x) => String.fromCharCode(c.charCodeAt() + x);
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (i & 1) result += shift(s[i - 1], Number(s[i]));
        else result += s[i];
    }

    return result;
};
