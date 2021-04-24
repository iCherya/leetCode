/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = (n, connections) => {
    const graph = [];
    while (graph.length < n) graph.push([]);

    connections.forEach(([u, v]) => {
        graph[u].push(v);
        graph[v].push(u);
    });

    let time = 0;
    const result = [];
    const lowestVertex = [];
    const discovered = new Array(n).fill(false);

    const dfs = (u, pre) => {
        discovered[u] = lowestVertex[u] = time++;

        for (const v of graph[u]) {
            if (v === pre) continue;

            if (!discovered[v]) {
                dfs(v, u);
                lowestVertex[u] = Math.min(lowestVertex[u], lowestVertex[v]);
                if (lowestVertex[v] > discovered[u]) result.push([u, v]);
            } else {
                lowestVertex[u] = Math.min(lowestVertex[u], discovered[v]);
            }
        }
    };

    dfs(0, -1);
    return result;
};
