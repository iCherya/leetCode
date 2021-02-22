/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = (s, d) => {
    d.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return b.length - a.length;
    });

    for (let i = 0; i < d.length; i++) {
        let left = 0;
        let right = 0;

        while (right < s.length) {
            if (s[right] === d[i][left]) {
                right++;
                left++;
            } else {
                right++;
            }
        }

        if (left === d[i].length) {
            return d[i];
        }
    }

    return '';
};
