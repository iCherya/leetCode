/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = (s) => {
    const subStrings = [];

    for (let i = 0; i < s.length - 2; i++) {
        subStrings.push(s.slice(i, i + 3));
    }

    let count = 0;

    for (const item of subStrings) {
        const set = new Set(item);
        if (set.size === 3) count++;
    }

    return count;
};
