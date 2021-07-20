// 235. Lowest Common Ancestor of a Binary Search Tree [Easy]
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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
    if (root.val > Math.max(p.val, q.val)) return lowestCommonAncestor(root.left, p, q);
    if (root.val < Math.min(p.val, q.val)) return lowestCommonAncestor(root.right, p, q);
    return root;
};
