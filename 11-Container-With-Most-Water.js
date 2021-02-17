/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        const w = end - start;
        const h = Math.min(height[start], height[end]);
        max = Math.max(max, w * h);
        height[start] > height[end] ? end-- : start++;
    }

    return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxAreaSlow = (height) => {
    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const w = j - i;
            const h = Math.min(height[i], height[j]);
            max = Math.max(max, w * h);
        }
    }

    return max;
};
