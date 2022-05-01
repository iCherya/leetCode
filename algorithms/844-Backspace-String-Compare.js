// 844. Backspace String Compare [Easy]
// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
  const removeChars = (string) => {
    const backspaceIndex = string.indexOf('#');

    if (backspaceIndex === -1) {
      return string;
    }

    const isCharBeforeBackspace = string[backspaceIndex - 1];
    const newString =
      (isCharBeforeBackspace ? string.slice(0, backspaceIndex - 1) : '') +
      string.slice(backspaceIndex + 1);

    return removeChars(newString);
  };

  const [first, second] = [removeChars(s), removeChars(t)];

  return first === second;
};
