/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
    const sentenceArr = sentence.split(' ');

    for (let i = 0; i < sentenceArr.length; i++) {
        const word = sentenceArr[i];

        if (word.startsWith(searchWord)) return i + 1;
    }

    return -1;
};
