// 744. Find Smallest Letter Greater Than Target [Easy]
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  const combined = Array.from(new Set([...letters, target])).sort();
  const targetIndex = combined.indexOf(target);

  return combined[targetIndex + 1];
};
