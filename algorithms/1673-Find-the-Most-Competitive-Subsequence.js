/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive2 = (nums, k) => {
    const stack = [];
    let i = 0;

    while (i < nums.length) {
        if (nums[i] < stack[stack.length - 1] && i + k - nums.length < stack.length) {
            stack.pop();
        } else {
            stack.push(nums[i++]);
        }
    }

    return stack.slice(0, k);
};
