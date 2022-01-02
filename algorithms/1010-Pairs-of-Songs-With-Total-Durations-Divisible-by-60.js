// 1010. Pairs of Songs With Total Durations Divisible by 60 [Medium]
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
  let counter = 0;

  for (let i = 0; i < time.length - 1; i += 1) {
    for (let j = i + 1; j < time.length; j += 1) {
      const sum = time[i] + time[j];
      if (sum % 60 === 0) counter += 1;
    }
  }

  return counter;
};
