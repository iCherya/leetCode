// 116. Populating Next Right Pointers in Each Node [Medium]
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
    if (!root) return null;

    root.left && (root.left.next = root.right);
    root.right && root.next && (root.right.next = root.next.left);

    connect(root.left);
    connect(root.right);

    return root;
};
