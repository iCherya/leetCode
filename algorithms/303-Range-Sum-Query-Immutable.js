// 303. Range Sum Query - Immutable [Easy]
// https://leetcode.com/problems/range-sum-query-immutable/

class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sums = this.init(nums);
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) return this.sums[right];
        return this.sums[right] - this.sums[left - 1];
    }

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    init(arr) {
        const sums = [...arr];

        for (let i = 1; i < sums.length; i++) {
            sums[i] += sums[i - 1];
        }

        return sums;
    }
}
