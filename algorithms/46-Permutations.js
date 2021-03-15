/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const result = [];

    const subRoutine = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i += 1) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                subRoutine(curr.slice(), m.concat(next));
            }
        }
    };

    subRoutine(nums);

    return result;
};
