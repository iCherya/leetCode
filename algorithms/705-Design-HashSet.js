/**
 * Initialize your data structure here.
 */
class MyHashSet {
    constructor() {
        this.set = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.contains(key)) return;
        this.set.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (!this.contains(key)) return;

        const idx = this.set.indexOf(key);
        this.set.splice(idx, 1);
    }

    /**
     * Returns true if this set contains the specified element
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.set.includes(key);
    }
}
