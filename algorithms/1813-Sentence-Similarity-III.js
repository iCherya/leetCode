/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = (sentence1, sentence2) => {
    if (sentence1 === '' || sentence2 === '') return true;
    const sentence1Array = sentence1.split(' ');
    const sentence2Array = sentence2.split(' ');
    const isEmpty = (arr1, arr2) => arr1.length === 0 || arr2.length === 0;

    while (sentence1Array[0] === sentence2Array[0]) {
        sentence1Array.shift();
        sentence2Array.shift();
        if (isEmpty(sentence1Array, sentence2Array)) return true;
    }

    while (
        sentence1Array[sentence1Array.length - 1] === sentence2Array[sentence2Array.length - 1]
    ) {
        sentence1Array.pop();
        sentence2Array.pop();
        if (isEmpty(sentence1Array, sentence2Array)) return true;
    }

    return isEmpty(sentence1Array, sentence2Array);
};
