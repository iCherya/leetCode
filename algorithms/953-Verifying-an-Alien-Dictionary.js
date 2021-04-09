/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    const map = {};

    order.split('').forEach((letter, idx) => {
        map[letter] = idx;
    });

    const isGreater = (word1, word2) => {
        if (word1 === word2) return false;
        if (word1.startsWith(word2)) return true;

        const min = Math.min(word1.length, word2.length);

        for (let i = 0; i < min; i++) {
            if (map[word1[i]] === map[word2[i]]) continue;
            if (map[word1[i]] > map[word2[i]]) return true;
            return false;
        }
    };

    for (let i = 0; i < words.length - 1; i++) {
        if (isGreater(words[i], words[i + 1])) return false;
    }

    return true;
};
