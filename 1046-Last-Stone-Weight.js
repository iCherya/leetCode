/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const stone1 = stones.pop();
        const stone2 = stones.pop();

        if (stone1 !== stone2) {
            const s3 = Math.abs(stone1 - stone2);
            stones.push(s3);
        }
    }

    return stones.length ? stones[0] : 0;
};
