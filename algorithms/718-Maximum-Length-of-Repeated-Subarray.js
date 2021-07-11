// 718. Maximum Length of Repeated Subarray [Medium]
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (nums1, nums2) => {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const dp = new Array(len1 + 1).fill(null).map(() => new Array(len2 + 1).fill(0));
    let max = 0;

    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max;
};
