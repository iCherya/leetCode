// 1967. Number of Strings That Appear as Substrings in Word [Easy]
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = (patterns, word) =>
    patterns.filter((pattern) => word.includes(pattern)).length;
