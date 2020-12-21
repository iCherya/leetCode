/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeII = (A, K) => {
    A.sort((a, b) => a - b);

    let result = A[A.length - 1] - A[0];

    for (let i = 0; i < A.length - 1; i++) {
        let max = Math.max(A[A.length - 1] - K, A[i] + K);
        let min = Math.min(A[0] + K, A[i + 1] - K);

        result = Math.min(result, max - min);
    }

    return result;
};
