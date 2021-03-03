/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let counts = {};

    for (const number of nums) {
        if (!counts[number]) {
            counts[number] = 1;
        } else {
            counts[number] += 1;
        }
    }

    for (const item in counts) {
        if (counts[item] === 1) {
            return +item;
        }
    }

    return -1;
};
