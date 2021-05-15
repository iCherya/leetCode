/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = (s) =>
    s
        .split(' ')
        .map((el) => {
            const word = el.slice(0, -1);
            const position = +el.slice(-1);

            return [word, position];
        })
        .sort((a, b) => a[1] - b[1])
        .map(([word]) => word)
        .join(' ');
