// 1032. Stream of Characters
// https://leetcode.com/problems/stream-of-characters/

class StreamChecker {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.words = Array.from(new Set(words.sort((a, b) => a.length - b.length)));
    this.string = '';
  }

  /**
   * @param {character} letter
   * @return {boolean}
   */
  query(letter) {
    this.string = this.string + letter;

    for (const word of this.words) {
      if (word.length > this.string.length) {
        return false;
      }

      if (word.slice(-1) === letter && this.string.endsWith(word)) {
        return true;
      }
    }

    return false;
  }
}
