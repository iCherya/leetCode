// 565. Array Nesting [Medium]
// https://leetcode.com/problems/array-nesting/

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = (nums) => {
    let result = 0;
    const len = nums.length;

    const visited = new Array(len).fill(false);

    for (let num of nums) {
        let count = 0;

        while (!visited[num]) {
            visited[num] = true;
            count += 1;
            num = nums[num];
        }

        result = Math.max(result, count);
    }

    return result;
};
