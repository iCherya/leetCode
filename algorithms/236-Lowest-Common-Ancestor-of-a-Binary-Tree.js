// 236. Lowest Common Ancestor of a Binary Tree [Medium]
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    if (!root) return null;
    if (root === p || root === q) return root;

    const leftTree = lowestCommonAncestor(root.left, p, q);
    const rightTree = lowestCommonAncestor(root.right, p, q);

    if (leftTree && rightTree) return root;

    return !leftTree ? rightTree : leftTree;
};
