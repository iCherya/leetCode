/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const set = new Set();

    for (const number of nums1) {
        if (nums2.indexOf(number) !== -1) {
            set.add(number);
        }
    }

    return Array.from(set);
};
