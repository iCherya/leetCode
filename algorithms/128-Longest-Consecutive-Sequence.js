/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    const hash = Object.fromEntries(nums.map((number) => [number, true]));
    let maxLength = 0;

    for (const number of nums) {
        if (!hash[number - 1]) {
            let subsequenceLength = 1;

            while (hash[number + subsequenceLength]) {
                subsequenceLength += 1;
            }

            maxLength = Math.max(maxLength, subsequenceLength);
        }
    }

    return maxLength;
};
