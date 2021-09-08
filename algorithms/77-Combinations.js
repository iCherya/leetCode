// 77. Combinations [Medium]
// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const result = [];

    const subRoutine = (arr, depth) => {
        if (arr.length === k) return result.push(arr);

        for (let i = depth; i <= n; i++) {
            subRoutine([...arr, i], i + 1);
        }
    };

    subRoutine([], 1);
    return result;
};
