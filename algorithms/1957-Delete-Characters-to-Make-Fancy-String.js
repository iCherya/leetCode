// 1957. Delete Characters to Make Fancy String [Easy]
// https://leetcode.com/problems/delete-characters-to-make-fancy-string/

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = (s) => {
    if (s.length < 3) return s;
    let result = '';

    for (let i = 1; i < s.length - 1; i++) {
        const prev = s[i - 1];
        const curr = s[i];
        const next = s[i + 1];

        if (prev === curr && curr === next) {
            continue;
        } else {
            result += prev;
        }
    }

    return result + s.slice(-2);
};
