/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    if (nums.length <= 2) {
        return false;
    }

    let min1 = Infinity,
        min2 = Infinity;
    for (let num of nums) {
        if (num <= min1) {
            min1 = num;
        } else if (num <= min2) {
            min2 = num;
        } else {
            return true;
        }
    }

    return false;
};
