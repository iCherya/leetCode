/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let start = 0;
    let end = s.length - 1;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let tempStart = i;
        let tempEnd = i;

        while (s[i] === s[tempEnd + 1]) {
            tempEnd++;
        }

        while (tempStart >= 0 && tempEnd < s.length && s[tempStart - 1] === s[tempEnd + 1]) {
            tempStart--;
            tempEnd++;
        }

        if (max < tempEnd - tempStart + 1) {
            start = tempStart;
            end = tempEnd;
            max = tempEnd - tempStart + 1;
        }
    }

    return s.substring(start, end + 1);
};
