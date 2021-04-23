/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (s) => {
    let curr = 1;
    let prev = 0;
    let result = 0;

    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            curr++;
        } else {
            prev = curr;
            curr = 1;
        }

        if (prev >= curr) result++;
    }

    return result;
};
