/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = (s) => {
    const digits = s
        .split('')
        .map((el) => parseInt(el, 10))
        .filter((el) => !Number.isNaN(el));

    const set = new Set(digits);
    const sorted = Array.from(set).sort((a, b) => b - a);

    return sorted.length > 1 ? sorted[1] : -1;
};
