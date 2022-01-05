// 748. Shortest Completing Word [Easy]
// https://leetcode.com/problems/shortest-completing-word/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
  const letters = licensePlate
    .split('')
    .filter((char) => /[a-zA-Z]/.test(char))
    .map((char) => char.toLowerCase())
    .reduce((acc, char) => {
      if (!acc[char]) acc[char] = 0;
      acc[char] += 1;
      return acc;
    }, {});

  const suitableWords = [];

  words.forEach((word, idx) => {
    const temp = { ...letters };

    word.split('').forEach((letter) => {
      if (temp[letter] !== undefined) {
        temp[letter] -= 1;
      }
    });

    const allLettersUsed = Object.values(temp).every((value) => value <= 0);
    if (allLettersUsed) {
      suitableWords.push({ word, idx });
    }
  });

  suitableWords.sort((word1, word2) => {
    if (word1.word.length === word2.word.length) return word1.idx - word2.idx;
    return word1.word.length - word2.word.length;
  });

  return suitableWords[0].word;
};
