/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = (A) => A[0].map((_, i) => A.map((x) => x[i]));
