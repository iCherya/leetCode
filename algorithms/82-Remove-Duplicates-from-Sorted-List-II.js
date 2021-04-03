/* global ListNode */
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
const deleteDuplicates = (head) => {
    const newNode = new ListNode(-1, head);
    let temp = newNode;

    while (head && head.next) {
        if (head.val === head.next.val) {
            while (head && head.next && head.val === head.next.val) {
                head = head.next;
            }
            head = head.next;
            temp.next = head;
        } else {
            temp = temp.next;
            head = head.next;
        }
    }

    return newNode.next;
};
