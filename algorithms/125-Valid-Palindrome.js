/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const str = s
        .toLowerCase()
        .split('')
        .filter((char) => char.match(/[a-z0-9]/i))
        .join('');

    return str === str.split('').reverse().join('');
};
