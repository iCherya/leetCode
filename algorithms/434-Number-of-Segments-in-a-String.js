// 434. Number of Segments in a String [Easy]
// https://leetcode.com/problems/number-of-segments-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => s.split(' ').filter(Boolean).length;
