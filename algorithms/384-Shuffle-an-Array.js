// 384. Shuffle an Array [Medium]
// https://leetcode.com/problems/shuffle-an-array/

class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.defaultNums = nums;
        this.currentNums = [...nums];
    }

    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    reset() {
        return this.defaultNums;
    }

    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    shuffle() {
        return this.currentNums.sort(() => 0.5 - Math.random());
    }
}
