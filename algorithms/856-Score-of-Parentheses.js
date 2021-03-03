/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = (S) => {
    const stack = [];
    let score = 0;

    for (const char of S) {
        if (char === '(') {
            stack.push(score);
            score = 0;
        } else {
            score = stack.pop() + Math.max(score * 2, 1);
        }
    }

    return score;
};
