/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
    if (nums.length < 2) return 0;

    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (prev >= curr) {
            const diff = prev - curr + 1;
            count += prev - curr + 1;
            nums[i] += diff;
        }
    }

    return count;
};
