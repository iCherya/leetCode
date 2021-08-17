// 1448. Count Good Nodes in Binary Tree [Medium]
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
const goodNodes = (root) => {
    let goodNodesCount = 0;
    const dfs = (node, maxValue) => {
        if (!node) return;

        if (node.val >= maxValue) {
            goodNodesCount += 1;
            maxValue = node.val;
        }

        dfs(node.left, maxValue);
        dfs(node.right, maxValue);
    };

    dfs(root, -Infinity);
    return goodNodesCount;
};
