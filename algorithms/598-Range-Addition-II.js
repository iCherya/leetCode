// 598. Range Addition II [Easy]
// https://leetcode.com/problems/range-addition-ii/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
    for (const [i, j] of ops) {
        m = Math.min(m, i);
        n = Math.min(n, j);
    }

    return m * n;
};
