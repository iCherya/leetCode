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
 * @return {boolean}
 */
const isValidBST = (root) => {
    if (!root) {
        return true;
    }
    let result = true;
    let prevNode = null;

    const find = (node) => {
        if (node.left) {
            find(node.left);
        }

        if (prevNode !== null && prevNode >= node.val) {
            result = false;
            return;
        }

        prevNode = node.val;

        if (node.right) {
            find(node.right);
        }
    };

    find(root);

    return result;
};
