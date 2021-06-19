// 307. Range Sum Query - Mutable [Medium]
// https://leetcode.com/problems/range-sum-query-mutable/

class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
        this.size = nums.length;
        this.tree = new Array(this.size + 1).fill(0);

        for (let i = 0; i < this.size; i++) {
            this.updateTree(i, nums[i]);
        }
    }

    /**
     * @param {number} index
     * @param {number} value
     * @return {void}
     */
    updateTree(index, value) {
        for (index += 1; index <= this.size; index += -index & index) this.tree[index] += value;
    }

    /**
     * @param {number} index
     * @param {number} value
     * @return {void}
     */
    update(index, value) {
        this.updateTree(index, value - this.nums[index]);
        this.nums[index] = value;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    getSum(index) {
        let sum = 0;
        for (index += 1; index > 0; index -= -index & index) sum += this.tree[index];
        return sum;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) return this.getSum(right);
        return this.getSum(right) - this.getSum(left - 1);
    }
}
