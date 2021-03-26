/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const wordSubsets = (A, B) => {
    const count = new Array(26).fill(0);
    const result = [];

    for (const str of B) {
        const curr = new Array(26).fill(0);

        for (const char of str) {
            const idx = char.charCodeAt(0) - 97;
            curr[idx]++;
            count[idx] = Math.max(count[idx], curr[idx]);
        }
    }

    for (const word of A) {
        const curr = [...count];

        for (const char of word) {
            const idx = char.charCodeAt(0) - 97;
            curr[idx]--;
        }

        if (curr.every((el) => el <= 0)) {
            result.push(word);
        }
    }

    return result;
};
