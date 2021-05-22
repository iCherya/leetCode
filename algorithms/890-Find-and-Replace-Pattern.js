/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = (words, pattern) =>
    words.filter((word) => {
        const wordMap = {};
        const patternMap = {};

        return word.split('').every((wordChar, idx) => {
            const patternChar = pattern.charAt(idx);

            if (!wordMap[wordChar]) wordMap[wordChar] = patternChar;
            if (!patternMap[patternChar]) patternMap[patternChar] = wordChar;

            return wordMap[wordChar] === patternChar && patternMap[patternChar] === wordChar;
        });
    });
