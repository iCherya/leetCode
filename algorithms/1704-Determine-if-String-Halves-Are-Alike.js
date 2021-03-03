/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (s) => {
    s = s.toLowerCase();
    const len = s.length;

    const a = s.slice(0, len / 2);
    const b = s.slice(len / 2);

    const alikeCounter = (str) => {
        const matches = str.match(/[aeiou]/g) || [];

        return matches.length;
    };

    return alikeCounter(a) === alikeCounter(b);
};
