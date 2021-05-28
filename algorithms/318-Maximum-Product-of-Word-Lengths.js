/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = (words) => {
    const hasCommonLetters = (word1, word2) => {
        const map = {};

        for (const letter of word1) {
            map[letter] = 1;
        }

        for (const letter of word2) {
            if (map[letter]) return true;
        }

        return false;
    };

    words.sort((a, b) => b.length - a.length);
    let max = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!hasCommonLetters(words[i], words[j])) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
};
