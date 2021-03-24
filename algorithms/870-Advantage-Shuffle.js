/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const advantageCount = (A, B) => {
    const indexes = B.map((_, idx) => idx).sort((a, b) => B[b] - B[a]);
    A.sort((a, b) => b - a);

    const res = [];

    for (let i = 0; i < B.length; i += 1) {
        res[indexes[i]] = A[0] > B[indexes[i]] ? A.shift() : A.pop();
    }

    return res;
};
