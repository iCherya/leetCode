// 113. Path Sum II [Medium]
// https://leetcode.com/problems/path-sum-ii/

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
 * @return {number[][]}
 */
const pathSum = (root, targetSum, path = [], result = []) => {
    if (root) {
        path.push(root.val);

        if (!root.left && !root.right && root.val === targetSum) {
            result.push([...path]);
        }

        pathSum(root.left, targetSum - root.val, path, result);
        pathSum(root.right, targetSum - root.val, path, result);

        path.pop();
    }

    return result;
};
