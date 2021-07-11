// 295. Find Median from Data Stream [Hard]
// https://leetcode.com/problems/find-median-from-data-stream/

class MedianFinder {
    constructor() {
        this.nums = [];
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.nums.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.nums.sort((a, b) => a - b);
        const center = Math.floor(this.nums.length / 2);

        return this.nums.length % 2
            ? this.nums[center]
            : (this.nums[center] + this.nums[center - 1]) / 2;
    }
}
