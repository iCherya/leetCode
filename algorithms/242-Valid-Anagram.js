/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const map = {};

    for (const char of s) {
        if (!map[char]) map[char] = 0;
        map[char]++;
    }

    for (const char of t) {
        if (!map[char] || map[char] < 0) return false;
        map[char]--;
    }

    return true;
};
