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
const convertBST = (root) => {
    let sum = 0;

    const traverse = (root) => {
        if (root) {
            traverse(root.right);
            root.val += sum;
            sum = root.val;
            traverse(root.left);
        }
    };

    traverse(root);

    return root;
};
