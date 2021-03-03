/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    let len = needle.length;
    if (len === 0) return 0;

    for (let i = 0; i < haystack.length; i++) {
        const substr = haystack.substr(i, len);
        if (substr === needle) {
            return i;
        }
    }

    return -1;
};
