/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies);

    return candies.map((candiesPerChild) => candiesPerChild + extraCandies >= maxCandies);
};
