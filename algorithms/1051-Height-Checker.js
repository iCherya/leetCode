/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
    const sorted = [...heights].sort((a, b) => a - b);
    let counter = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) counter++;
    }

    return counter;
};
