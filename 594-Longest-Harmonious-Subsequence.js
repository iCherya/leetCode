/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
    nums.sort((a, b) => a - b);
    const minMaxCandidates = [];

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const next = nums[i + 1];

        if (next - curr === 1) {
            minMaxCandidates.push([curr, next]);
        }
    }

    let lhs = 0;

    for (const [min, max] of minMaxCandidates) {
        const filtered = nums.filter((num) => num === min || num === max);
        lhs = Math.max(lhs, filtered.length);
    }

    return lhs;
};
