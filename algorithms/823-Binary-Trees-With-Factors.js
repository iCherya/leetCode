/**
 * @param {number[]} arr
 * @return {number}
 */
const numFactoredBinaryTrees = (arr) => {
    arr.sort((a, b) => b - a);

    const mod = 10 ** 9 + 7;
    const binaryTrees = new Map();

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        const root = arr[i];
        let total = 0;

        for (let j = i + 1; j < arr.length; j += 1) {
            const left = arr[j];

            if (root % left === 0) {
                const right = root / left;
                if (binaryTrees.has(right)) {
                    total += (((binaryTrees.get(left) % mod) * binaryTrees.get(right)) % mod) % mod;
                }
            }
        }

        binaryTrees.set(root, ((total % mod) + (1 % mod)) % mod);
    }

    let ans = 0;

    binaryTrees.forEach((value) => {
        ans = ((ans % mod) + (value % mod)) % mod;
    });

    return ans;
};
