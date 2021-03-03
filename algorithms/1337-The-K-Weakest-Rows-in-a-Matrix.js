/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
    const result = [];

    mat.forEach((arr, idx) => {
        result.push([idx, arr.filter((number) => number === 1).length]);
    });

    return result
        .sort((a, b) => a[1] - b[1])
        .slice(0, k)
        .map((arr) => arr[0]);
};
