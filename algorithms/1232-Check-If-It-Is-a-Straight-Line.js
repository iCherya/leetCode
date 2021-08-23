// 1232. Check If It Is a Straight Line [Easy]
// https://leetcode.com/problems/check-if-it-is-a-straight-line/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
    coordinates.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    for (let i = 1; i < coordinates.length - 1; i++) {
        const [prevX, prevY] = coordinates[i - 1];
        const [currX, currY] = coordinates[i];
        const [nextX, nextY] = coordinates[i + 1];

        if ((currY - prevY) / (currX - prevX) !== (nextY - prevY) / (nextX - prevX)) {
            return false;
        }
    }

    return true;
};
