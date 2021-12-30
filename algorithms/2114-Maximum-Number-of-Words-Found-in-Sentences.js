// 2114. Maximum Number of Words Found in Sentences [Easy]
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) =>
  Math.max(...sentences.map((sentence) => sentence.split(' ').length));
