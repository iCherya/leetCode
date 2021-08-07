// 383. Ransom Note [Easy]
// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const map = {};

    for (const letter of magazine) {
        if (!map[letter]) map[letter] = 0;
        map[letter] += 1;
    }

    for (const letter of ransomNote) {
        if (!map[letter]) return false;
        map[letter] -= 1;
    }

    return true;
};
