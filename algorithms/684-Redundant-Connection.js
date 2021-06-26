// 684. Redundant Connection [Medium]
// https://leetcode.com/problems/redundant-connection/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
    const graph = new Array(edges.length).fill(null).map((_, idx) => idx);

    const find = (x) => {
        while (graph[x] !== x) x = graph[x];
        return x;
    };

    for (const [from, to] of edges) {
        const rootFrom = find(from);
        const rootTo = find(to);

        if (rootFrom === rootTo) return [from, to];
        graph[rootTo] = rootFrom;
    }
};
