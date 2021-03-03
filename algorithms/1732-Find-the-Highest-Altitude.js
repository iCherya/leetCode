/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
    const altitudes = [0];

    for (const point of gain) {
        altitudes.push(altitudes[altitudes.length - 1] + point);
    }

    return altitudes.sort((a, b) => b - a)[0];
};
