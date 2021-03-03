/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = (need, have, q = []) => {
    for (let x of need) {
        if (q.length) {
            if (x != q[0]) return false;
            q.shift();
            continue;
        }
        let found = false;
        for (let piece of have) {
            if (x == piece[0]) {
                q.push(...piece.slice(1, piece.length));
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
};
