/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
    const result = [];
    const allowedSet = new Set(allowed.split(''));

    const isWordCharInSet = (wordArr, allowedSet) => {
        for (const char of wordArr) {
            if (!allowedSet.has(char)) {
                return false;
            }
        }
        return true;
    };

    for (const word of words) {
        if (word.length === 0) continue;
        const wordSet = new Set(word.split(''));
        const wordArr = Array.from(wordSet);

        if (isWordCharInSet(wordArr, allowedSet)) {
            result.push(word);
        }
    }

    return result.length;
};
