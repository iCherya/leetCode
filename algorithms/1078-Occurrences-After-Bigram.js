// 1078. Occurrences After Bigram [Easy]
// https://leetcode.com/problems/occurrences-after-bigram/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
    const result = [];
    const array = text.split(' ');

    for (let i = 0; i < array.length - 2; i++) {
        const firstInText = array[i];
        const secondInText = array[i + 1];
        const candidate = array[i + 2];

        if (firstInText === first && secondInText === second) {
            result.push(candidate);
        }
    }

    return result;
};
