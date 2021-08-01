// 827. Making A Large Island
// https://leetcode.com/problems/making-a-large-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = (grid) => {
    const getNeighbors = (grid, i, j) => {
        const neighbors = [];

        if (i > 0) neighbors.push([i - 1, j]);
        if (i < grid.length - 1) neighbors.push([i + 1, j]);
        if (j > 0) neighbors.push([i, j - 1]);
        if (j < grid[0].length - 1) neighbors.push([i, j + 1]);

        return neighbors;
    };

    const rows = grid.length;
    const cols = grid[0].length;
    const disjointSet = new DisjointSet(rows * cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                for (const [iMove, jMove] of getNeighbors(grid, i, j)) {
                    if (grid[iMove][jMove] === 1) {
                        disjointSet.union(i * cols + j, iMove * cols + jMove);
                    }
                }
            }
        }
    }

    let result = disjointSet.getMaxSize();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                let currentMax = 1;
                const seen = new Set();

                for (const [iMove, jMove] of getNeighbors(grid, i, j)) {
                    if (grid[iMove][jMove] === 1) {
                        const parent = disjointSet.find(iMove * cols + jMove);

                        if (!seen.has(parent)) {
                            seen.add(parent);
                            currentMax += disjointSet.getSize(iMove * cols + jMove);
                        }
                    }
                }

                result = Math.max(result, currentMax);
            }
        }
    }

    return result;
};

class DisjointSet {
    constructor(n) {
        this.parents = new Array(n).fill(null).map((_, idx) => idx);
        this.ranks = new Array(n).fill(0);
        this.sizes = new Array(n).fill(1);
    }

    find(x) {
        const parents = this.parents;

        if (parents[x] !== x) {
            parents[x] = this.find(parents[x]);
        }

        return parents[x];
    }

    getSize(x) {
        return this.sizes[this.find(x)];
    }

    getMaxSize() {
        return Math.max(...this.sizes);
    }

    union(x, y) {
        const { parents, ranks, sizes } = this;

        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (ranks[rootX] < ranks[rootY]) {
                parents[rootX] = rootY;
                sizes[rootY] += sizes[rootX];
            } else if (ranks[rootX] > ranks[rootY]) {
                parents[rootY] = rootX;
                sizes[rootX] += sizes[rootY];
            } else {
                parents[rootY] = rootX;
                sizes[rootX] += sizes[rootY];
                ranks[rootX] += 1;
            }
        }
    }
}
