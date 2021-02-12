/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
    const max = Math.max(...nums, 0);

    let x = 1;
    while (x <= max) {
        if (!nums.includes(x)) return x;
        x++;
    }

    return x;
};
