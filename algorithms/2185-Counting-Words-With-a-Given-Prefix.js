// 2185. Counting Words With a Given Prefix [Easy]
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => {
  let count = 0;

  words.forEach((word) => {
    if (word.startsWith(pref)) {
      count += 1;
    }
  });

  return count;
};
