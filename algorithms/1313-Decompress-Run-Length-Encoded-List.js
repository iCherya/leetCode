/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
    const result = [];

    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        const value = nums[i + 1];

        while (freq > 0) {
            result.push(value);
            freq -= 1;
        }
    }

    return result;
};
