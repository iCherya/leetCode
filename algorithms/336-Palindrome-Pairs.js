// 336. Palindrome Pairs
// https://leetcode.com/problems/palindrome-pairs/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = (words) => {
    const isPalindrome = (x) => {
        for (let i = 0; i < x.length; i++) {
            if (x[i] !== x[x.length - 1 - i]) return false;
        }

        return true;
    };

    const result = [];

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPalindrome(words[i] + words[j])) result.push([i, j]);
            if (isPalindrome(words[j] + words[i])) result.push([j, i]);
        }
    }

    return result;
};
