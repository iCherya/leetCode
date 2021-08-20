// 520. Detect Capital [Easy]
// https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    if (word.toUpperCase() === word) return true;
    if (word.slice(1).toLowerCase() !== word.slice(1)) return false;
    return true;
};
