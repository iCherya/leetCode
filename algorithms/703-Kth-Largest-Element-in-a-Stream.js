class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.arr = nums.sort((a, b) => a - b);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const getPosition = (val) => {
            let left = 0;
            let right = this.arr.length - 1;

            while (left <= right) {
                const middle = Math.floor((left + right) / 2);

                if (this.arr[middle] === val) return middle;
                if (this.arr[middle] < val) left = middle + 1;
                else right = middle - 1;
            }

            return left;
        };

        this.arr.splice(getPosition(val), 0, val);

        return this.arr[this.arr.length - this.k];
    }
}
