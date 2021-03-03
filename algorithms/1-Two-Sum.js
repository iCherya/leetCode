/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const arr = nums.map((el, idx) => [el, idx]).sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = arr[left][0] + arr[right][0];

        if (sum === target) {
            return [arr[left][1], arr[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
