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
 * @return {boolean}
 */
const isBalanced = (root) => {
    if (!root) return true;

    const heightNode = (r) => {
        if (!r) return 0;
        return Math.max(heightNode(r.left), heightNode(r.right)) + 1;
    };

    const leftDepth = heightNode(root.left);
    const rightDepth = heightNode(root.right);

    return Math.abs(leftDepth - rightDepth) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
