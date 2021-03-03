/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
    const arr = Array.from(new Set(nums)).sort((a, b) => b - a);

    return arr[2] !== undefined ? arr[2] : arr[0];
};
