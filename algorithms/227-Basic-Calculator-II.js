// 227. Basic Calculator II
// https://leetcode.com/problems/basic-calculator-ii/

/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  let string = s.replace(/ /g, '');

  let operator = '+';
  let i = 0;
  let stack = [];
  let temp = 0;
  let start = 0;

  while (i < string.length) {
    if (!isNaN(+string[i])) {
      start = i;
      while (i < string.length && (!isNaN(+string[i]) || string[i] === '.')) {
        i++;
      }
      i--;

      temp = parseFloat(string.substring(start, i + 1));

      if (operator === '+') {
        stack.push(temp);
      } else if (operator === '-') {
        stack.push(-temp);
      } else if (operator === '*') {
        stack.push(stack.pop() * temp);
      } else {
        stack.push(Math.trunc(stack.pop() / temp));
      }
    } else {
      operator = string[i];
    }
    i++;
  }

  return stack.reduce((p, c) => p + c, 0);
};
