// 1071. Greatest Common Divisor of Strings [Easy]
// https://leetcode.com/problems/greatest-common-divisor-of-strings/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    if (str1 + str2 !== str2 + str1) return '';

    return str1.slice(0, gcd(str1.length, str2.length));
};
