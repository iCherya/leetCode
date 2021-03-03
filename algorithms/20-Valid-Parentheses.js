/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const relates = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];
    stack.push(s[0]);

    for (let i = 1; i < s.length; i++) {
        const currChar = s[i];
        const lastInStack = stack[stack.length - 1];

        if (relates[lastInStack] === currChar) {
            stack.pop();
        } else {
            stack.push(currChar);
        }
    }

    return stack.length === 0;
};
