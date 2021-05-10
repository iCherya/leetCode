/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = (words) => {
    words.sort();
    const set = new Set();
    let result = '';

    for (const word of words) {
        if (word.length === 1 || set.has(word.slice(0, -1))) {
            set.add(word);

            if (word.length > result.length) {
                result = word;
            }
        }
    }

    return result;
};
