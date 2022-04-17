// 897. Increasing Order Search Tree [Easy]
// https://leetcode.com/problems/increasing-order-search-tree/

/* eslint-disable no-undef */
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
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  const createNode = (array) => {
    if (!array.length) return null;

    const newNode = new TreeNode(array[0]);
    if (array.length === 1) return newNode;
    newNode.right = createNode(array.slice(1));

    return newNode;
  };

  return createNode(values);
};
