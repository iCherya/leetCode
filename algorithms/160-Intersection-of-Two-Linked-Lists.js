/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let nodeA = headA;
    let nodeB = headB;
    const hashMap = new Map();

    while (nodeA) {
        hashMap.set(nodeA, 'visited');
        nodeA = nodeA.next;
    }

    while (nodeB) {
        if (hashMap.get(nodeB) === 'visited') return nodeB;
        nodeB = nodeB.next;
    }
};
