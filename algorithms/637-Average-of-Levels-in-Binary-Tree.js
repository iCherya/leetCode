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
 * @return {number[]}
 */
const averageOfLevels = (root) => {
    const levels = {};

    const traverse = (node, idx) => {
        if (!node) return;

        levels[idx] = levels[idx] || [];
        levels[idx].push(node.val);

        traverse(node.left, idx + 1);
        traverse(node.right, idx + 1);
    };

    traverse(root, 1);

    return Object.values(levels).map((el) => el.reduce((acc, curr) => acc + curr, 0) / el.length);
};
