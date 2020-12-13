/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);

    let i = 1;
    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
        i++;
    }

    return false;
};
