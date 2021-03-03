/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
    const temp = [];
    const result = [];

    const isPalindrome = (string) => {
        for (let i = 0; i < string.length; i++) {
            const firstChar = string[i];
            const lastChar = string[string.length - 1 - i];

            if (firstChar !== lastChar) {
                return false;
            }
        }

        return true;
    };

    const backtrack = (temp, idx) => {
        if (idx == s.length) {
            result.push([...temp]);
        }

        for (let i = idx; i < s.length; i++) {
            if (isPalindrome(s.slice(idx, i + 1))) {
                temp.push(s.slice(idx, i + 1));
                backtrack(temp, i + 1);
                temp.pop();
            }
        }
    };

    let idx = 0;
    backtrack(temp, idx);

    return result;
};
