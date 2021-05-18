/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfFlooredPairs = (nums) => {
    const MAX = 10 ** 5;
    const MODULO = 10 ** 9 + 7;

    const freq = new Array(MAX + 1).fill(0);

    for (const num of nums) {
        freq[num] += 1;
    }

    for (let i = 1; i <= MAX; i++) {
        freq[i] += freq[i - 1];
    }

    let ans = 0;
    for (let i = 1; i <= MAX; i++) {
        if (freq[i] > freq[i - 1]) {
            let sum = 0;

            for (let j = 1; i * j <= MAX; j++) {
                const lower = i * j - 1;
                const upper = i * (j + 1) - 1;

                sum += (freq[Math.min(upper, MAX)] - freq[lower]) * j;
            }

            ans = (ans + (sum % MODULO) * (freq[i] - freq[i - 1])) % MODULO;
        }
    }

    return ans;
};
