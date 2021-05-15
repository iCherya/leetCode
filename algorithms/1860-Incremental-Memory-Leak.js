/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = (memory1, memory2) => {
    let time = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (memory1 < time && memory2 < time) {
            return [time, memory1, memory2];
        }

        if (memory1 > memory2) memory1 -= time;
        else memory2 -= time;

        time++;
    }
};
