/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    const folders = path.split('/').filter((el) => /\.\.|[^\s.]/.test(el));
    const stack = [];

    for (const current of folders) {
        if (current === '..') {
            stack.pop();
        } else {
            stack.push(current);
        }
    }

    return '/' + stack.join('/');
};
