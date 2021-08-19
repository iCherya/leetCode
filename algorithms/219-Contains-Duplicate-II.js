// 219. Contains Duplicate II [Easy]
// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    const hashMap = {};

    nums.forEach((number, idx) => {
        if (!hashMap[number]) hashMap[number] = [];
        hashMap[number].push(idx);
    });

    const occurrences = Object.values(hashMap).filter((arr) => arr.length > 1);

    for (const arr of occurrences) {
        for (let i = 1; i < arr.length; i++) {
            const prev = arr[i - 1];
            const curr = arr[i];

            if (Math.abs(prev - curr) <= k) return true;
        }
    }

    return false;
};
