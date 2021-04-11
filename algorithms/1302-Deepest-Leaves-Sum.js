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
 * @return {number}
 */
const deepestLeavesSum = (root) => {
    const items = [];

    const traverse = (root, tree, level) => {
        if (!root) return;

        traverse(root.left, tree, level + 1);
        traverse(root.right, tree, level + 1);

        if (!tree[level]) tree[level] = root.val;
        else tree[level] += root.val;
    };

    traverse(root, items, 0);
    return items.pop();
};
