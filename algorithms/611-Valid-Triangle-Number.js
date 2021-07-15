// 611. Valid Triangle Number [Medium]
// https://leetcode.com/problems/valid-triangle-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = (nums) => {
    nums.sort((a, b) => a - b);

    let triplets = 0;

    for (let i = 2; i < nums.length; i++) {
        const currentNumber = nums[i];
        let left = 0;
        let right = i - 1;

        while (left < right) {
            const Number = nums[left];
            const rightNumber = nums[right];

            if (Number + rightNumber > currentNumber) {
                triplets += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return triplets;
};
