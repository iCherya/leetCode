/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
    if (!s) return 0;

    const len = s.length;
    const stack = [];
    let left = -1;
    let result = 0;

    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            if (stack.length === 0) {
                left = i;
            } else {
                stack.pop();
                if (stack.length === 0) {
                    result = Math.max(result, i - left);
                } else {
                    result = Math.max(result, i - stack[stack.length - 1]);
                }
            }
        }
    }

    return result;
};
