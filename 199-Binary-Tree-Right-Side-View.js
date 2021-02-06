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
 * @return {number[]}
 */
const rightSideView = (root) => {
    let result = [];

    const traverse = (root, depth) => {
        if (!root) {
            return;
        }

        result[depth] = root.val;
        traverse(root.left, depth + 1);
        traverse(root.right, depth + 1);
    };

    traverse(root, 0);

    return result;
};
