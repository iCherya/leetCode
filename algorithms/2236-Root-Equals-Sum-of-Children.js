// 2236. Root Equals Sum of Children [Easy]
// https://leetcode.com/problems/root-equals-sum-of-children/

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
const checkTree = (root) => root.val === root.left.val + root.right.val;
