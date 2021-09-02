// 876. Middle of the Linked List [Easy]
// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    const nodes = [];

    while (head) {
        nodes.push(head);
        head = head.next;
    }

    let half = nodes.length / 2;
    if (!Number.isInteger(half)) half = Math.floor(half);

    return nodes[half];
};
