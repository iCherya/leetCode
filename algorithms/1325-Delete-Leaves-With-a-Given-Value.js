// 1325. Delete Leaves With a Given Value [Medium]
// https://leetcode.com/problems/delete-leaves-with-a-given-value/

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
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = (root, target) => {
    if (root === null) return null;

    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    if (root.left === null && root.right === null && root.val === target) return null;
    return root;
};
