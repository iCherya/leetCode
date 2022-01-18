// 605. Can Place Flowers [Easy]
// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let canPlaceFlowersCount = 0;

  for (let i = 0; i < flowerbed.length; i += 1) {
    const previous = flowerbed[i - 1];
    const current = flowerbed[i];
    const next = flowerbed[i + 1];

    if (previous !== 1 && current === 0 && next !== 1) {
      canPlaceFlowersCount += 1;
      i += 1;
    }
  }

  return canPlaceFlowersCount >= n;
};
