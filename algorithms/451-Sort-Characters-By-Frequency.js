// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
    const hashMap = {};

    for (const char of s) {
        if (!hashMap[char]) hashMap[char] = 0;
        hashMap[char] += 1;
    }

    return Object.entries(hashMap)
        .sort((a, b) => b[1] - a[1])
        .map(([char, count]) => ''.padStart(count, char))
        .join('');
};
