/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
    const map = new Map();

    const traverse = (node) => {
        if (!node) return null;

        if (!map.has(node)) {
            const newNode = new Node(node.val);

            map.set(node, newNode);
            newNode.random = traverse(node.random);
            newNode.next = traverse(node.next);
        }

        return map.get(node);
    };

    return traverse(head);
};
