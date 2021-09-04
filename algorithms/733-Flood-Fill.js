// 733. Flood Fill [Easy]
// https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor, currentColor = image[sr][sc]) => {
    if (
        !image ||
        sr < 0 ||
        sc < 0 ||
        sr >= image.length ||
        sc >= image[0].length ||
        image[sr][sc] !== currentColor ||
        image[sr][sc] === newColor
    )
        return image;

    image[sr][sc] = newColor;

    floodFill(image, sr + 1, sc, newColor, currentColor);
    floodFill(image, sr - 1, sc, newColor, currentColor);
    floodFill(image, sr, sc + 1, newColor, currentColor);
    floodFill(image, sr, sc - 1, newColor, currentColor);

    return image;
};
