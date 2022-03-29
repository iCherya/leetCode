// 2129. Capitalize the Title [Easy]
// https://leetcode.com/problems/capitalize-the-title/

/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = (title) =>
  title
    .split(' ')
    .map((word) => word.toLowerCase())
    .map((word) =>
      word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join(' ');
