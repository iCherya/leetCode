/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = (firstWord, secondWord, targetWord) => {
    const words = {
        a: '0',
        b: '1',
        c: '2',
        d: '3',
        e: '4',
        f: '5',
        g: '6',
        h: '7',
        i: '8',
        j: '9'
    };
    const getValue = (string) => +string.split('').reduce((acc, curr) => acc + words[curr], '');

    return getValue(firstWord) + getValue(secondWord) === getValue(targetWord);
};
