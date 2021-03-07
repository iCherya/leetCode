/**
 * Initialize your data structure here.
 */
class MyHashMap {
    constructor() {
        this.items = {};
    }

    /**
     * value will always be non-negative.
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.items[key] = value;
    }

    /**
     * Returns the value to which the specified key is mapped,
     * or -1 if this map contains no mapping for the key
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.items[key] === undefined ? -1 : this.items[key];
    }

    /**
     * Removes the mapping of the specified value key if this map
     * contains a mapping for the key
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.items[key];
    }
}
