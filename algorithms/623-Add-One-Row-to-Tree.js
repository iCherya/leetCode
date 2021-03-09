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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = (root, v, d, left = true) => {
    if (!root && d === 1) return new TreeNode(v);

    if (!root) return null;

    if (d === 1) {
        const node = new TreeNode(v);

        if (left) {
            node.left = root;
        } else {
            node.right = root;
        }

        return node;
    }

    root.left = addOneRow(root.left, v, d - 1, true);
    root.right = addOneRow(root.right, v, d - 1, false);

    return root;
};
