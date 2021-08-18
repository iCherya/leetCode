// 1791. Find Center of Star Graph [Easy]
// https://leetcode.com/problems/find-center-of-star-graph/

/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => {
    const [[x1, y1], [x2, y2]] = edges;

    if (x1 === x2) return x1;
    if (x1 === y2) return x1;
    if (y1 === x2) return y1;
    if (y1 === y2) return y1;
};
