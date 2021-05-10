class OrderedStream {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.stream = new Array(n);
        this.pointer = 0;
    }

    /**
     * @param {number} id
     * @param {string} value
     * @return {string[]}
     */
    insert(id, value) {
        const idx = id - 1;
        this.stream[idx] = value;

        const result = [];

        if (this.pointer === idx) {
            while (this.stream[this.pointer]) {
                const item = this.stream[this.pointer];
                result.push(item);
                this.pointer += 1;
            }
        }

        return result;
    }
}
