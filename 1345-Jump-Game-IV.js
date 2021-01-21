/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = (arr) => {
    if (!arr || arr.length <= 1) return 0;

    let len = arr.length;
    let map = {};
    let dp = new Array(len).fill(-1);

    for (let i = 0; i < len; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = [];
        }
        map[arr[i]].push(i);
    }

    let queue = [0];
    dp[0] = 0;
    while (queue.length) {
        let i = queue.pop();
        let next = [];

        if (i > 0) next.push(i - 1);
        if (i < len - 1) next.push(i + 1);
        if (map[arr[i]]) {
            for (let idx of map[arr[i]]) {
                next.push(idx);
            }
        }

        map[arr[i]] = null;

        for (let t of next) {
            if (dp[t] !== -1) continue;
            dp[t] = dp[i] + 1;
            queue.unshift(t);
        }
    }

    return dp[len - 1];
};
