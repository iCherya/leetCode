/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = (graph) => {
    const colors = new Map();

    const dfs = (graph, colors, u, color) => {
        if (!colors.has(u)) {
            colors.set(u, color);

            for (const v of graph[u]) {
                if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
                    return false;
                }
            }
        }

        return true;
    };

    for (const u of graph) {
        if (!dfs(graph, colors, u, 0)) {
            return false;
        }
    }

    return true;
};
