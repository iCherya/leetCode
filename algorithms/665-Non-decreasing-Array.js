/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
    if (nums.length === 1) return true;

    let modifyCount = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            modifyCount++;

            if (i - 2 >= 0 && i + 1 < nums.length) {
                if (nums[i - 2] > nums[i] && nums[i - 1] > nums[i + 1]) {
                    return false;
                }
            }

            if (modifyCount > 1) return false;
        }
    }

    return true;
};
