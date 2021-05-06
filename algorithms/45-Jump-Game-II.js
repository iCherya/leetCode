/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    if (nums.length < 2) return 0;

    let resultJump = 1;
    let currentJump = nums[0];
    let maxJump = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (currentJump === i) {
            resultJump++;
            currentJump = maxJump;
        }
    }

    return resultJump;
};
