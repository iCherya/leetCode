/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
    const occurrences = {};

    for (let number of arr) {
        if (occurrences[number]) {
            occurrences[number]++;
        } else {
            occurrences[number] = 1;
        }
    }

    const unique = new Set(Object.values(occurrences));

    return unique.size === Object.values(occurrences).length;
};
