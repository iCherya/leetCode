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
        let preLength = text.length;
        let re = RegExp(textToRemove, 'gi');

        while (re.test(text)) {
            text = text.replace(re, '');
        }

        let postLength = text.length;
        let totalRemoved = (preLength - postLength) / 2;

        return [text, totalRemoved * pointsPerRemoval];
    };

    if (x > y) {
        [text, score1] = maximum(text, 'ab', x);
        [_, score2] = maximum(text, 'ba', y);
    } else {
        [text, score1] = maximum(text, 'ba', y);
        [_, score2] = maximum(text, 'ab', x);
    }

    return score1 + score2;
};
