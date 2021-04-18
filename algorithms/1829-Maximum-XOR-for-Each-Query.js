/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = (nums, maximumBit) => {
    const res = [];
    const maxNumber = (1 << maximumBit) - 1;
    let xor = 0;

    for (const number of nums) {
        xor ^= number;
        res.push(xor ^ maxNumber);
    }

    return res.reverse();
};
