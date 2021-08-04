// 90. Subsets II [Medium]
// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
    nums.sort((a, b) => a - b);
    const subsets = [[]];

    for (const number of nums) {
        let max = subsets.length;
        for (const subset of subsets) {
            if (max > 0) subsets.push([...subset, number]);
            max--;
        }
    }

    return [...new Set(subsets.map(JSON.stringify))].map(JSON.parse);
};
