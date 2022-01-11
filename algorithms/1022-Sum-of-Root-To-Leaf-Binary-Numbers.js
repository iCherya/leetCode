// 1022. Sum of Root To Leaf Binary Numbers [Easy]
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

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
const sumRootToLeaf = (root, binaryString = '') => {
  if (!root) return 0;

  const updatedBinaryString = binaryString + root.val;
  if (!root.left && !root.right) {
    return parseInt(updatedBinaryString, 2);
  }

  return (
    sumRootToLeaf(root.left, updatedBinaryString) +
    sumRootToLeaf(root.right, updatedBinaryString)
  );
};
