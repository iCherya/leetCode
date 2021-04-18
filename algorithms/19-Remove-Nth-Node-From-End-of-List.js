/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const pointers = [head];

    let curr = head.next;
    while (curr !== null) {
        pointers.push(curr);
        curr = curr.next;
    }
    pointers.push(null);

    const deletePos = pointers.length - n - 1;

    if (deletePos === 0) {
        head = head.next;
    } else {
        pointers[deletePos - 1].next = pointers[deletePos + 1];
    }

    return head;
};
