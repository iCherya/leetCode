/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = (root) => {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }

    return result;
};
