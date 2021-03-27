/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let count = 0;

    for (let i = 0; i < s.length; i += 1) {
        for (let j = i; j < i + 2; j += 1) {
            let left = i;
            let right = j;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
        }
    }

    return count;
};
