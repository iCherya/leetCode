// 429. N-ary Tree Level Order Traversal [Medium]
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    const result = [];
    if (!root) return result;

    const queue = [root];

    while (queue.length) {
        let count = queue.length;
        const currentLevel = [];

        while (count) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            for (const child of currentNode.children) {
                queue.push(child);
            }

            count--;
        }

        result.push(currentLevel);
    }

    return result;
};
