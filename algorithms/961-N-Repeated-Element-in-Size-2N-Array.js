// 961. N-Repeated Element in Size 2N Array [Easy]
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = (nums) => {
    const hash = {};
    const n = nums.length / 2;

    nums.forEach((number) => {
        if (!hash[number]) hash[number] = 0;
        hash[number] += 1;
    });

    return +Object.entries(hash).filter(([, occurrences]) => occurrences === n)[0][0];
};
