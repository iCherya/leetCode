// 1305. All Elements in Two Binary Search Trees [Medium]
// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = (root1, root2) => {
  const result = [];

  const traverse = (root) => {
    if (!root) return;

    result.push(root.val);
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root1);
  traverse(root2);

  return result.sort((a, b) => a - b);
};
