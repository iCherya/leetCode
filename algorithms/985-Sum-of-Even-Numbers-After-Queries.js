// 985. Sum of Even Numbers After Queries [Easy]
// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = (nums, queries) => {
    const isEven = (n) => n % 2 === 0;
    let sumEven = nums.filter(isEven).reduce((acc, curr) => acc + curr, 0);
    const result = [];

    for (const [value, index] of queries) {
        const candidate = nums[index] + value;
        sumEven -= isEven(nums[index]) ? nums[index] : 0;

        if (isEven(candidate)) sumEven += candidate;

        nums[index] = candidate;
        result.push(sumEven);
    }

    return result;
};
