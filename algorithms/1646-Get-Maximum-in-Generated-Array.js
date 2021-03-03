/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = (n) => {
    if (n === 0 || n === 1) return n;
    const nums = new Array(n + 1).fill(null);
    nums[0] = 0;
    nums[1] = 1;
    let max = -Infinity;

    for (let i = 2; i <= n; i++) {
        const isEven = i % 2 === 0;
        let pointer;

        if (isEven) {
            pointer = i / 2;
            nums[i] = nums[pointer];
        } else {
            pointer = (i - 1) / 2;
            nums[i] = nums[pointer] + nums[pointer + 1];
        }

        max = Math.max(max, nums[i]);
    }

    return max;
};
