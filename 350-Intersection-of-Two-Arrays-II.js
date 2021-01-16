/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const map = new Map();
    const result = [];

    for (const number of nums1) {
        map.set(number, map.get(number) + 1 || 1);
    }

    for (const number of nums2) {
        if (map.get(number) >= 1) {
            result.push(number);
            map.set(number, map.get(number) - 1);
        }
    }

    return result;
};
