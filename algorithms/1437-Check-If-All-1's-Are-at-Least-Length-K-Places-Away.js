/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = (nums, k) => {
    let prevIdx = nums.indexOf(1);

    for (let i = prevIdx + 1; i < nums.length; i++) {
        if (nums[i] === 0) continue;

        if (i - prevIdx < k + 1) return false;
        prevIdx = i;
    }

    return true;
};
