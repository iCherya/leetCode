// 1979. Find Greatest Common Divisor of Array [Easy]
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = (nums) => {
    nums.sort((a, b) => a - b);
    let [smallest, largest] = [nums[0], nums[nums.length - 1]];

    while (smallest > 0) {
        const modulo = largest % smallest;
        largest = smallest;
        smallest = modulo;
    }

    return largest;
};
