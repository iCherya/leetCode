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
const pseudoPalindromicPaths = (root) => {
    let ret = 0;

    const helper = (node, parentPath) => {
        if (!node) return;

        const path = new Set(parentPath);
        if (path.has(node.val)) {
            path.delete(node.val);
        } else {
            path.add(node.val);
        }

        if (node.left || node.right) {
            helper(node.left, path);
            helper(node.right, path);
        } else {
            if (path.size <= 1) {
                ret += 1;
            }
        }
    };
    helper(root, new Set());

    return ret;
};
