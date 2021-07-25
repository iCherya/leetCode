// 1941. Check if All Characters Have Equal Number of Occurrences [Easy]
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = (s) => {
    const map = {};

    for (const char of s) {
        if (!map[char]) map[char] = 0;
        map[char] += 1;
    }

    const set = new Set(Object.values(map));

    return set.size === 1;
};
