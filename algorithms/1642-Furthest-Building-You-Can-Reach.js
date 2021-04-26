/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
    const deltas = [];
    const result = heights.length - 1;

    for (let i = 0; i < heights.length - 1; i++) {
        const currentHeight = heights[i];
        const nextHeight = heights[i + 1];
        const currentDelta = nextHeight - currentHeight;

        if (currentDelta <= 0) continue;

        deltas.push(currentDelta);

        if (deltas.length <= ladders) continue;

        const minimumDelta = Math.min(...deltas);
        deltas.splice(deltas.indexOf(minimumDelta), 1);

        if (bricks < minimumDelta) return i;
        bricks -= minimumDelta;
    }

    return result;
};
