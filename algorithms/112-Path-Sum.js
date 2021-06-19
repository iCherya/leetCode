// 112. Path Sum [Easy]
// https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    if (!root) return false;

    if (!root.left && !root.right && root.val === targetSum) return true;

    return (
        hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    );
};
