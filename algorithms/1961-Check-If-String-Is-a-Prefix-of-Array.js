// 1961. Check If String Is a Prefix of Array [Easy]
// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = (s, words) => {
    let prefix = '';

    for (const word of words) {
        prefix += word;
        if (prefix === s) return true;
    }

    return false;
};
