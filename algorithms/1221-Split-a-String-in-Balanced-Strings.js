/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
    let result = 0;
    let count = 0;

    for (const char of s) {
        if (char === 'L') count += 1;
        else count -= 1;

        if (count === 0) result += 1;
    }

    return result;
};
