/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = (nums) => {
    let n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return nums[0] * nums[1] + Math.max(nums[1], nums[0]);

    nums = [1, ...nums, 1];

    const result = [];
    for (let _ of nums) {
        const arr = new Array(nums.length).fill(0);
        result.push(arr);
    }

    for (let l = 1; l < n + 1; l++) {
        for (let i = 1; i < n - l + 2; i++) {
            let j = i + l - 1;
            for (let k = i; k < j + 1; k++) {
                let temp =
                    nums[i - 1] * nums[k] * nums[j + 1] + result[i][k - 1] + result[k + 1][j];
                result[i][j] = Math.max(temp, result[i][j]);
            }
        }
    }

    return result[1][n];
};
