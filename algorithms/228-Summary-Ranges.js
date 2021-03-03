/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
    if (nums.length === 0) return [];
    const result = [[nums[0]]];

    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (prev + 1 !== curr) {
            result.push([curr]);
        } else {
            result[result.length - 1].push(curr);
        }
    }

    return result.map((arr) => {
        if (arr.length === 1) return arr[0].toString();

        return `${arr[0]}->${arr[arr.length - 1]}`;
    });
};
