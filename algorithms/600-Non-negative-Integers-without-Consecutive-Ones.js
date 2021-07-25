// 600. Non-negative Integers without Consecutive Ones [Hard]
// https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/

/**
 * @param {number} n
 * @return {number}
 */
const findIntegers = (n) => {
    let count = 2;

    const traverse = (prev, curr, n) => {
        if (curr * 2 <= n) {
            count += 1;
            traverse(0, curr * 2, n);
        }

        if (prev === 0 && curr * 2 + 1 <= n) {
            count += 1;
            traverse(1, curr * 2 + 1, n);
        }
    };

    traverse(1, 1, n);

    return count;
};
