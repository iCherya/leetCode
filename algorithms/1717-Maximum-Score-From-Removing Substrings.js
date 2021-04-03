/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = (s, x, y) => {
    let text = s;

    let score1;
    let score2;

    const maximum = (text, textToRemove, pointsPerRemoval) => {
        const preLength = text.length;
        const re = RegExp(textToRemove, 'gi');

        while (re.test(text)) {
            text = text.replace(re, '');
        }

        const postLength = text.length;
        const totalRemoved = (preLength - postLength) / 2;

        return [text, totalRemoved * pointsPerRemoval];
    };

    if (x > y) {
        [text, score1] = maximum(text, 'ab', x);
        // eslint-disable-next-line no-undef
        [_, score2] = maximum(text, 'ba', y);
    } else {
        [text, score1] = maximum(text, 'ba', y);
        // eslint-disable-next-line no-undef
        [_, score2] = maximum(text, 'ab', x);
    }

    return score1 + score2;
};
