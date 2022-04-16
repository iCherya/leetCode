// 2000. Reverse Prefix of Word [Easy]
// https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
  const chIndex = word.split('').indexOf(ch);
  const prefix = word.slice(0, chIndex + 1);
  const reversedPrefix = prefix.split('').reverse().join('');

  return reversedPrefix + word.slice(chIndex + 1);
};
