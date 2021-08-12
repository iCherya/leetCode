// 49. Group Anagrams [Medium]
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const wordsMap = {};

    strs.forEach((word) => {
        const key = word.split('').sort().join('');

        if (!wordsMap[key]) wordsMap[key] = [];
        wordsMap[key].push(word);
    });

    return Object.values(wordsMap);
};
