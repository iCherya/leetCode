/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = (x, y, points) => {
    const valid = points
        .map((el, idx) => [...el, idx])
        .filter(([pointX, pointY]) => pointX === x || pointY === y)
        .map((el) => {
            const [pointX, pointY, idx] = el;
            const distance = Math.abs(x - pointX) + Math.abs(y - pointY);

            return [idx, distance];
        })
        .sort((a, b) => a[1] - b[1]);

    return valid[0] ? valid[0][0] : -1;
};
