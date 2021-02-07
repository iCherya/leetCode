/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = (s) => {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const rightCharIdx = s.lastIndexOf(char);

        if (i !== rightCharIdx) {
            max = Math.max(max, rightCharIdx - i);
        }
    }

    return max - 1;
};
