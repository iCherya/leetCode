/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
    const len = nums.length;
    let counter = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[(i + 1) % len]) {
            counter++;
        }

        if (counter > 1) {
            return false;
        }
    }

    return true;
};
