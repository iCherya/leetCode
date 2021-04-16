/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
    const stack = [];

    for (const char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;

            if (stack[stack.length - 1][1] === k) stack.pop();
        } else {
            stack.push([char, 1]);
        }
    }

    return stack.map(([char, count]) => char.repeat(count)).join('');
};
