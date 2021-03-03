/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
    let counter = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) counter++;
        }
    }

    return counter;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
