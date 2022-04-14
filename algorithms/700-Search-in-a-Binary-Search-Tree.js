// 700. Search in a Binary Search Tree [Easy]
// https://leetcode.com/problems/search-in-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;

  return root.val > val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
};
