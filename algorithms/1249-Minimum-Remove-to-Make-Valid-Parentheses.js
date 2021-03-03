/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
    const stack = [];
    let count = 0;

    for (const char of s) {
        if (char === ')') {
            if (count > 0) {
                count--;
                stack.push(')');
            }
            continue;
        }

        if (char === '(') {
            count++;
            stack.push('(');
            continue;
        }

        stack.push(char);
    }

    count = 0;
    let str = '';

    while (stack.length > 0) {
        const char = stack.pop();

        if (char === '(') {
            if (count > 0) {
                count--;
                str = char + str;
            }
            continue;
        }

        if (char === ')') {
            count++;
            str = char + str;
            continue;
        }

        str = char + str;
    }

    return str;
};
