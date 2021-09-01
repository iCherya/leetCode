// 409. Longest Palindrome [Easy]
// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    const set = new Set();
    let count = 0;

    for (const char of s) {
        if (set.has(char)) {
            set.delete(char);
            count += 1;
        } else {
            set.add(char);
        }
    }

    return set.size ? count * 2 + 1 : count * 2;
};
