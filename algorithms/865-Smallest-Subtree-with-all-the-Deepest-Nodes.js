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
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = (root) => {
    let depth = 0;
    let result;

    const dfs = (node, level) => {
        depth = Math.max(level, depth);

        if (node === null) {
            return level;
        }

        let left = dfs(node.left, level + 1);
        let right = dfs(node.right, level + 1);

        if (left === depth && right === depth) {
            result = node;
        }

        return Math.max(left, right);
    };

    dfs(root, 1);

    return result;
};
