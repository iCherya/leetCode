/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = (nums, target, start) =>
    nums
        .map((value, index) => [value, index])
        .filter(([value]) => target === value)
        .map(([, idx]) => Math.abs(idx - start))
        .sort((a, b) => a - b)[0];
