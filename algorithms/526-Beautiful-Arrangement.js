/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = (n) => {
    let counter = 0;
    const visited = Array(n + 1).fill(false);

    const rearrange = (idx) => {
        if (idx > n) counter++;

        for (let i = 1; i <= n; i++) {
            if (visited[i]) continue;
            if (i % idx && idx % i) continue;

            visited[i] = true;
            rearrange(idx + 1);
            visited[i] = false;
        }
    };

    rearrange(1);

    return counter;
};
