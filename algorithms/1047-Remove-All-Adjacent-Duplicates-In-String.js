/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {
    const stack = [];

    for (const char of S) {
        const lastInStack = stack.pop();

        if (char !== lastInStack) {
            stack.push(lastInStack, char);
        }
    }

    return stack.join('');
};
