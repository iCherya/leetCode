// 677. Map Sum Pairs [Medium]
// https://leetcode.com/problems/map-sum-pairs/

class MapSum {
    constructor() {
        this.map = {};
    }

    /**
     * @param {string} key
     * @param {number} val
     * @return {void}
     */
    insert(key, val) {
        this.map[key] = val;
    }

    /**
     * @param {string} prefix
     * @return {number}
     */
    sum(prefix) {
        return Object.entries(this.map)
            .filter(([key]) => key.startsWith(prefix))
            .reduce((acc, [, value]) => acc + value, 0);
    }
}
