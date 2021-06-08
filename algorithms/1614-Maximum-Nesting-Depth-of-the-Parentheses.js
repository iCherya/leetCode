/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
    let depth = 0;
    let max = 0;

    for (const char of s) {
        if (char === '(') depth += 1;
        if (char === ')') depth -= 1;

        max = Math.max(depth, max);
    }

    return depth === 0 ? max : 0;
};
