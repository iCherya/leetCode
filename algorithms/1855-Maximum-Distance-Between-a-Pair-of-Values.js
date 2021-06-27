// 1855. Maximum Distance Between a Pair of Values [Medium]
// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = (nums1, nums2) => {
    let pointer1 = 0;
    let pointer2 = 0;
    let max = 0;

    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] > nums2[pointer2]) {
            pointer1 += 1;
        } else {
            max = Math.max(max, pointer2 - pointer1);
            pointer2 += 1;
        }
    }

    return max;
};
