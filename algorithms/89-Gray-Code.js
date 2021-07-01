// 89. Gray Code [Medium]
// https://leetcode.com/problems/gray-code/

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = (n) => {
    const result = [0];
    if (n === 0) return result;

    let nextDigit = 1;
    result.push(nextDigit);

    for (let i = 2; i <= n; i++) {
        nextDigit *= 2;

        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] + nextDigit);
        }
    }

    return result;
};
