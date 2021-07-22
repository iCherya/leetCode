// 915. Partition Array into Disjoint Intervals [Medium]
// https://leetcode.com/problems/partition-array-into-disjoint-intervals/

/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = (nums) => {
    const len = nums.length;
    const leftArr = new Array(len);
    const rightArr = new Array(len);
    let [min, max] = [Infinity, -Infinity];

    for (let i = 0; i < len; i++) {
        max = Math.max(max, nums[i]);
        leftArr[i] = max;
    }

    for (let i = len - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        rightArr[i] = min;
    }

    for (let i = 1; i < len; i++) {
        if (leftArr[i - 1] <= rightArr[i]) return i;
    }

    return len;
};
