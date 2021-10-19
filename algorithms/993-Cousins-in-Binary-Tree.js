// 993. Cousins in Binary Tree
// https://leetcode.com/problems/cousins-in-binary-tree/

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
    const xNode = { parent: null, depth: -1 };
    const yNode = { parent: null, depth: -1 };

    const dfs = (current, parent, depth) => {
        if (current === null) return;

        if (current.val === x) {
            xNode.parent = parent;
            xNode.depth = depth;
        } else if (current.val === y) {
            yNode.parent = parent;
            yNode.depth = depth;
        } else {
            dfs(current.left, current.val, depth + 1);
            dfs(current.right, current.val, depth + 1);
        }
    };

    dfs(root, null, 0);

    return xNode.parent !== yNode.parent && xNode.depth === yNode.depth;
};
