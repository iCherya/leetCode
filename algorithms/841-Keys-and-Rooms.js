/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
    const queue = [0];
    const set = new Set([0]);

    while (queue.length > 0) {
        const current = queue.pop();

        rooms[current].forEach((key) => {
            if (!set.has(key)) {
                set.add(key);
                queue.push(key);
            }
        });
    }

    return set.size === rooms.length;
};
