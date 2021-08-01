// 42. Trapping Rain Water [Hard]
// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let level = 0;
    let result = 0;

    while (left < right) {
        let lowerHeight = 0;

        if (height[left] < height[right]) {
            lowerHeight = height[left];
            left++;
        } else {
            lowerHeight = height[right];
            right--;
        }

        level = Math.max(lowerHeight, level);
        result += level - lowerHeight;
    }

    return result;
};
