// 884. Uncommon Words from Two Sentences [Easy]
// https://leetcode.com/problems/uncommon-words-from-two-sentences/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
    const map = {};

    [...s1.split(' '), ...s2.split(' ')].forEach((word) => {
        if (!map[word]) map[word] = 0;
        map[word] += 1;
    });

    return Object.entries(map)
        .filter(([, count]) => count < 2)
        .map(([word]) => word);
};
