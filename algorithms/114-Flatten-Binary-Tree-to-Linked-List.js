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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
    let prev = null;

    const traverse = (node) => {
        if (node.right) traverse(node.right);
        if (node.left) traverse(node.left);

        node.left = null;
        node.right = prev;
        prev = node;
    };

    if (root) traverse(root);
};
