// 1911. Maximum Alternating Subsequence Sum [Medium]
// https://leetcode.com/problems/maximum-alternating-subsequence-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = (nums) => {
    let oddSum = 0;
    let evenSum = 0;

    for (const number of nums) {
        oddSum = Math.max(oddSum, evenSum + number);
        evenSum = Math.max(evenSum, oddSum - number);
    }

    return Math.max(oddSum, evenSum);
};
