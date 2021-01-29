/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const map = {};

    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }

    for (const num in map) {
        if (map[num] > nums.length / 2) return +num;
    }
};
