/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let max = 0;
    const set = new Set();
    let i = 0;
    let j = 0;

    while (j < s.length && i < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            j++;
            max = Math.max(max, j - i);
        } else {
            set.delete(s[i]);
            i++;
        }
    }

    return max;
};
