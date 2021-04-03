/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        if (total < target && end < nums.length) {
            total += nums[end];
            end++;
        } else if (total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        } else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};
