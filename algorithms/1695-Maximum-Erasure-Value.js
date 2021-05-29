/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = (nums) => {
    const set = new Set();
    let sum = 0;
    let max = 0;
    let i = 0;
    let j = 0;

    while (i < nums.length && j < nums.length) {
        if (!set.has(nums[j])) {
            set.add(nums[j]);
            sum += nums[j];
            max = Math.max(max, sum);
            j++;
        } else {
            set.delete(nums[i]);
            sum -= nums[i];
            i++;
        }
    }

    return max;
};
