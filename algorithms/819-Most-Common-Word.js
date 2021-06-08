/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
    const map = {};
    paragraph
        .replace(/[^A-Za-z0-9\s]/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .split(' ')
        .filter(Boolean)
        .forEach((word) => {
            if (!map[word.toLowerCase()]) map[word.toLowerCase()] = 0;
            map[word.toLowerCase()] += 1;
        });

    const mostCommonWordsSorted = Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map((el) => el[0]);

    for (const word of mostCommonWordsSorted) {
        if (!banned.includes(word)) return word;
    }
};
