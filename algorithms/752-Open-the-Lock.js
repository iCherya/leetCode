/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
    const blocked = new Set(deadends);
    const visited = new Set();

    if (blocked.has('0000')) return -1;
    visited.add('0000');

    let queue = ['0000'];
    let distance = 0;

    while (queue.length) {
        const nextQueue = [];

        for (const combination of queue) {
            if (combination === target) return distance;

            for (let i = 0; i < combination.length; i++) {
                const up = (+combination[i] + 1) % 10;
                const down = (+combination[i] + 9) % 10;
                const nextUp = combination.slice(0, i) + up + combination.slice(i + 1);
                const nextDown = combination.slice(0, i) + down + combination.slice(i + 1);

                if (!visited.has(nextUp) && !blocked.has(nextUp)) {
                    nextQueue.push(nextUp);
                    visited.add(nextUp);
                }

                if (!visited.has(nextDown) && !blocked.has(nextDown)) {
                    nextQueue.push(nextDown);
                    visited.add(nextDown);
                }
            }
        }

        distance++;
        queue = nextQueue;
    }

    return -1;
};
