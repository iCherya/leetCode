/**
 * @param {number[]} A
 * @return {boolean}
 */
const isIdealPermutation = (A) => {
    const len = A.length;
    const first = A[0];
    const last = A[A.length - 1];

    if (first !== 0 && first !== 1) return false;
    if (last !== len - 1 && last !== len - 2) return false;

    for (let i = 1; i < len - 1; i++) {
        const curr = A[i];
        if (curr !== i && curr !== i - 1 && curr !== i + 1) return false;
    }

    return true;
};
