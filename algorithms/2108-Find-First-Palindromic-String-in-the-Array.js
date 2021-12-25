// 2108. Find First Palindromic String in the Array
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = (words) => {
  const isPalindrome = (string) => {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left] !== string[right]) return false;

      left += 1;
      right -= 1;
    }

    return true;
  };

  return words.find((word) => isPalindrome(word)) || '';
};
