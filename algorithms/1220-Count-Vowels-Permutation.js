// 1220. Count Vowels Permutation [Hard]
// https://leetcode.com/problems/count-vowels-permutation/

/**
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = (n) => {
    const rulesMap = { a: ['e'], e: ['a', 'i'], i: ['a', 'e', 'o', 'u'], o: ['i', 'u'], u: ['a'] };
    const MOD = 1000000007;
    let previousFrequency = { a: 1, e: 1, i: 1, o: 1, u: 1 };

    while (n > 1) {
        const currentFrequency = {};

        for (const [previous, count] of Object.entries(previousFrequency)) {
            for (const current of rulesMap[previous]) {
                if (!currentFrequency[current]) currentFrequency[current] = 0;
                currentFrequency[current] += count % MOD;
            }
        }

        previousFrequency = currentFrequency;
        n--;
    }
    return Object.values(previousFrequency).reduce((acc, curr) => acc + curr, 0) % MOD;
};
