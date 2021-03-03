class MinStack {
    constructor() {
        this.nums = [];
        this.minNums = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.nums.length === 0) {
            this.minNums.push(x);
        } else {
            const min = Math.min(this.minNums[this.minNums.length - 1], x);
            this.minNums.push(min);
        }

        this.nums.push(x);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minNums.pop();

        return this.nums.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.nums[this.nums.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minNums[this.minNums.length - 1];
    }
}
