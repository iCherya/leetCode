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
const minCameraCover = (root) => {
    let ans = 0;

    const traverse = (node) => {
        if (!node) return 3;
        const leftChild = traverse(node.left);
        const rightChild = traverse(node.right);

        if (leftChild === 1 || rightChild === 1) {
            ans += 1;
            return 2;
        }

        if (leftChild === 2 || rightChild === 2) {
            return 3;
        }

        if (node !== root) {
            return 1;
        }

        ans += 1;
    };

    traverse(root);
    return ans;
};
