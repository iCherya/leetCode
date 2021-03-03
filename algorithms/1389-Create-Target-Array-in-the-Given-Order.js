/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    const targetArr = [];

    for (let i = 0; i < index.length; i++) {
        targetArr.splice(index[i], 0, nums[i]);
    }

    return targetArr;
};
