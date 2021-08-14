// 1768. Merge Strings Alternately [Easy]
// https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let result = '';

    const maxLen = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLen; i++) {
        const word1Char = word1[i] || '';
        const word2Char = word2[i] || '';

        result += word1Char + word2Char;
    }

    return result;
};
