// 557. Reverse Words in a String III [Easy]
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) =>
    s
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
