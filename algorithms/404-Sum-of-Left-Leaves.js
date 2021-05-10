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
const sumOfLeftLeaves = (root) => {
    let sum = 0;

    const helper = (root) => {
        if (!root) return 0;

        if (root.left) {
            if (!root.left.left && !root.left.right) {
                sum += root.left.val;
            }
        }

        helper(root.left);
        helper(root.right);
    };

    helper(root);
    return sum;
};
