/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = (n, last = '0', total = 0) => {
    if (!n) return 1;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const c of vowels) {
        if (last.localeCompare(c) <= 0) {
            total += countVowelStrings(n - 1, c);
        }
    }

    return total;
};
