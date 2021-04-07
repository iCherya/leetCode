/* global BigInt */
/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = (word) => {
    const numbers = word
        .replace(/[a-zA-Z]/gi, ' ')
        .split(' ')
        .filter((el) => el !== '')
        .map((el) => BigInt(el));

    return new Set(numbers).size;
};
