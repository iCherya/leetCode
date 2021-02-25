/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
    if (nums.length === 1) return 0;
    const sorted = [...nums].sort((a, b) => a - b);

    let startIdx = nums.length - 1;
    let endIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) {
            startIdx = Math.min(startIdx, i);
            endIdx = Math.max(endIdx, i);
        }
    }

    return endIdx - startIdx >= 0 ? endIdx - startIdx + 1 : 0;
};
