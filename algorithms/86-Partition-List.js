/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
    const frontHead = new ListNode();
    const backHead = new ListNode();
    let frontTail = frontHead;
    let backTail = backHead;

    let curr = head;

    while (curr !== null) {
        const next = curr.next;

        if (curr.val < x) {
            frontTail.next = curr;
            frontTail = frontTail.next;
        } else {
            backTail.next = curr;
            backTail = backTail.next;
        }

        curr = next;
    }

    frontTail.next = backHead.next;
    backTail.next = null;

    return frontHead.next;
};
