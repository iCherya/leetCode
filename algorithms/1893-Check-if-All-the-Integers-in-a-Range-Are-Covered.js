// 1893. Check if All the Integers in a Range Are Covered
// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = (ranges, left, right) => {
    const numbers = new Set();

    for (const range of ranges) {
        const [rangeLeft, rangeRight] = range;

        let i = rangeLeft;
        while (i <= rangeRight) {
            numbers.add(i);
            i++;
        }
    }

    for (let i = left; i <= right; i++) {
        if (!numbers.has(i)) return false;
    }

    return true;
};
