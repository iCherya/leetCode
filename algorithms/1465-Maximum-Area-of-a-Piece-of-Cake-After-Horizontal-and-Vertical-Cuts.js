/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = (h, w, horizontalCuts, verticalCuts) => {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    let maxHeight = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
    let maxWidth = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);

    for (let i = 1; i < horizontalCuts.length; i++) {
        maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
    }

    for (let i = 1; i < verticalCuts.length; i++) {
        maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1]);
    }

    return (maxHeight * maxWidth) % (10 ** 9 + 7);
};
