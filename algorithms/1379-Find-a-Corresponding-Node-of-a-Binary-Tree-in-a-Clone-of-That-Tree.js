/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = (original, cloned, target) => {
    if (!cloned) return null;
    if (cloned.val === target.val) return cloned;

    return (
        getTargetCopy(original, cloned.left, target) ||
        getTargetCopy(original, cloned.right, target)
    );
};
