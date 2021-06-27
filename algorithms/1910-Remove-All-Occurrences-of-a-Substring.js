// 1910. Remove All Occurrences of a Substring [Medium]
// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = (s, part) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const idx = s.indexOf(part);
        if (idx === -1) return s;
        s = s.slice(0, idx) + s.slice(idx + part.length);
    }
};
