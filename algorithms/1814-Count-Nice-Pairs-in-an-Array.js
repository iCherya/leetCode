/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = (nums) => {
    const rev = (x) => {
        let temp = x;
        let reversed = 0;

        while (temp) {
            const part = temp % 10;
            reversed = reversed * 10 + part;
            temp = Math.floor(temp / 10);
        }

        return reversed;
    };

    let pairs = 0;
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i] - rev(nums[i]);
        if (!map[val]) map[val] = 0;
        pairs += map[val];
        map[val] += 1;
    }

    return pairs % (10 ** 9 + 7);
};
