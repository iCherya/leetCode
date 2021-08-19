// 1339. Maximum Product of Splitted Binary Tree [Medium]
// https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/

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
const maxProduct = (root) => {
    const MOD = 10 ** 9 + 7;

    const getBinaryTreeSum = (node, sum = 0) => {
        if (!node) return 0;
        sum += getBinaryTreeSum(node.left) + getBinaryTreeSum(node.right);
        node.val = sum + node.val;
        return node.val;
    };

    const maxProduct = (node) => {
        if (!node) return;

        maxProduct(node.left);
        maxProduct(node.right);

        max = Math.max(max, (totalSum - node.val) * node.val);
    };

    let max = -Infinity;
    const totalSum = getBinaryTreeSum(root);
    maxProduct(root);

    return max % MOD;
};
