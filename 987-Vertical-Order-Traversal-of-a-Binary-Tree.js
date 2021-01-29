/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = (root) => {
    const map = {};

    const dfs = (node, x = 0, y = 0) => {
        if (!node) return;
        if (!map[x]) map[x] = {};
        if (!map[x][y]) map[x][y] = [];
        map[x][y].push(node.val);

        dfs(node.left, x - 1, y + 1);
        dfs(node.right, x + 1, y + 1);
    };

    dfs(root);

    const result = [];
    const arr = Object.keys(map).sort((a, b) => a - b);

    for (const i of arr) {
        const column = [];
        const y = Object.keys(map[i]).sort((a, b) => a - b);
        for (const j of y) {
            column.push(...map[i][j].sort((a, b) => a - b));
        }
        result.push(column);
    }

    return result;
};
