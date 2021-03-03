/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (sequence, word) => {
    let counter = 0;
    let string = word;

    while (sequence.includes(string)) {
        string += word;
        counter++;
    }

    return counter;
};
