// 2283. Check if Number Has Equal Digit Count and Digit Value [Easy]
// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = (num) => {
  const times = new Array(num.length).fill(0);

  num.split('').forEach((digit) => {
    times[digit] += 1;
  });

  return times.join('') === num;
};
