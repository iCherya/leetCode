/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
    const isValidPalindrome = (s, left, right) => {
        while (left < right) {
            left++;
            right--;
            if (s[left] !== s[right]) return false;
        }

        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isValidPalindrome(s, left, right + 1) || isValidPalindrome(s, left - 1, right);
        }

        left++;
        right--;
    }

    return true;
};
