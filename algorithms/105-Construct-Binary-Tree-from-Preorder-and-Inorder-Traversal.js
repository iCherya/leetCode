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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    let i = 0;

    const helper = (start, end) => {
        if (start >= end) return null;

        const rootIdx = inorder.indexOf(preorder[i]);
        const node = new TreeNode(preorder[i]);
        i++;

        node.left = helper(start, rootIdx);
        node.right = helper(rootIdx + 1, end);

        return node;
    };

    return helper(0, preorder.length);
};
