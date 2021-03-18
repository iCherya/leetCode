/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = (nums) => {
    if (nums.length < 1) return 0;

    let positiveCount = 1;
    let negativeCount = 1;

    for (let i = 0; i < nums.length - 1; i += 1) {
        const curr = nums[i];
        const next = nums[i + 1];

        if (curr === next) continue;

        if (curr < next) {
            negativeCount = positiveCount + 1;
        } else {
            positiveCount = negativeCount + 1;
        }
    }

    return Math.max(positiveCount, negativeCount);
};
