// 476. Number Complement [Easy]
// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  const binary = num.toString(2);
  const binaryComplement = binary
    .split('')
    .map((char) => (char === '1' ? '0' : '1'))
    .join('');

  return parseInt(binaryComplement, 2);
};
