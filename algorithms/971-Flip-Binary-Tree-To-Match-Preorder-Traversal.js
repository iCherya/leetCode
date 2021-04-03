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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = (root, voyage) => {
    let i = 0;
    const result = [];

    const dfs = (node, v) => {
        if (node === null) return true;
        if (node.val !== v[i++]) return false;

        if (node.left !== null && node.left.val !== v[i]) {
            result.push(node.val);

            return dfs(node.right, v) && dfs(node.left, v);
        }

        return dfs(node.left, v) && dfs(node.right, v);
    };

    return dfs(root, voyage) ? result : [-1];
};
