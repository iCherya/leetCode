/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
    let result = '';

    for (const char of str) {
        const code = char.charCodeAt(0);

        if (code >= 65 && code < 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += char;
        }
    }

    return result;
};
