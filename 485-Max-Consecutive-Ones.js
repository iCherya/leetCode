/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let counter = 0;
    let max = 0;

    for (let number of nums) {
        if (number === 1) counter++;
        else counter = 0;

        max = Math.max(max, counter);
    }

    return max;
};
