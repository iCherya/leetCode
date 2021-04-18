/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence) => {
    const arr = sentence.replace(/ /g, '').split('');
    const set = new Set(arr);

    return set.size > 25;
};
