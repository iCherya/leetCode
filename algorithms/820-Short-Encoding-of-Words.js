/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = (words) => {
    const arr = words.map((el) => el.split('').reverse().join('')).sort();

    let result = 0;
    let previous = '';

    arr.forEach((word) => {
        if (!word.startsWith(previous)) {
            result += previous.length + 1;
        }

        previous = word;
    });

    return result + previous.length + 1;
};
