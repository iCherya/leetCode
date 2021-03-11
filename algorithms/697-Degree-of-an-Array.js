/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
    const map = {};
    let count = 0;
    let len = 0;

    nums.forEach((curr, idx) => {
        if (map[curr]) {
            map[curr].push([idx]);

            const tempLength = map[curr][map[curr].length - 1] - map[curr][0];

            if (map[curr].length > count) {
                count = map[curr].length;
                len = tempLength;
            } else if (map[curr].length === count && tempLength < len) {
                len = tempLength;
            }
        } else {
            map[curr] = [idx];
        }
    });

    return len + 1;
};
