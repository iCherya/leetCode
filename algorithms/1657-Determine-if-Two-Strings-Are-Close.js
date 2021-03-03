/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const len = word1.length;
    const word1Hash = {};
    const word2Hash = {};

    for (let i = 0; i < len; i++) {
        if (word1[i] in word1Hash) {
            word1Hash[word1[i]]++;
        } else {
            word1Hash[word1[i]] = 1;
        }

        if (word2[i] in word2Hash) {
            word2Hash[word2[i]]++;
        } else {
            word2Hash[word2[i]] = 1;
        }
    }

    const word1HashSortedLetters = Object.keys(word1Hash).sort();
    const word2HashSortedLetters = Object.keys(word2Hash).sort();

    for (let i = 0; i < len; i++) {
        if (word1HashSortedLetters[i] !== word2HashSortedLetters[i]) return false;
    }

    const word1HashSortedOqurences = Object.values(word1Hash).sort((a, b) => a - b);
    const word2HashSortedOqurences = Object.values(word2Hash).sort((a, b) => a - b);

    for (let i = 0; i < word1Counts.length; i++) {
        if (word1HashSortedOqurences[i] !== word2HashSortedOqurences[i]) return false;
    }

    return true;
};
