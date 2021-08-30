// 35. Search Insert Position [Easy]
// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    const position = nums.reverse().findIndex((el) => el < target);

    return position < 0 ? 0 : nums.length - position;
};
