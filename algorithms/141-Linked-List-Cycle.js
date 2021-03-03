/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if (!head) return false;
    if (head.visited) return true;

    head.visited = true;

    return hasCycle(head.next);
};
