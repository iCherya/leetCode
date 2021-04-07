/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');
