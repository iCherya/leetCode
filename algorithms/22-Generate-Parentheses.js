// 22. Generate Parentheses [Medium]
// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const result = [];

    const helper = (currentString, openTypeLength, closeTypeLength) => {
        if (openTypeLength > closeTypeLength) return;

        if (!openTypeLength && !closeTypeLength) {
            result.push(currentString);
            return;
        }

        if (openTypeLength > 0) helper(`${currentString}(`, openTypeLength - 1, closeTypeLength);
        if (closeTypeLength > 0) helper(`${currentString})`, openTypeLength, closeTypeLength - 1);
    };

    helper('', n, n);
    return result;
};
