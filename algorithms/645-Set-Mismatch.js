/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
    let duplicate;
    nums.unshift(0);

    for (let i = 1; i < nums.length; i += 1) {
        const idx = Math.abs(nums[i]);

        if (nums[idx] < 0) {
            duplicate = idx;
        } else {
            nums[idx] *= -1;
        }
    }

    return [duplicate, nums.findIndex((n) => n > 0)];
};
