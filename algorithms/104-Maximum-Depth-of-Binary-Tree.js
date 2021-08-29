// 104. Maximum Depth of Binary Tree [Easy]
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
const maxDepth = (root, max = 0) => {
    if (!root) return max;

    const left = maxDepth(root.left, max + 1);
    const right = maxDepth(root.right, max + 1);

    return Math.max(left, right);
};
