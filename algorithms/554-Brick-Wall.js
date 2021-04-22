/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = (wall) => {
    const map = {};
    const max = wall.length;

    for (const row of wall) {
        let sum = 0;

        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];

            if (!map[sum]) map[sum] = 1;
            else map[sum] += 1;
        }
    }

    let result = max;

    for (const key of Object.keys(map)) {
        result = Math.min(result, max - map[key]);
    }

    return result;
};
