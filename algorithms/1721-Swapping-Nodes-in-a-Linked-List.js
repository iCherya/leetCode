/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
    const arr = [];
    let next = head;

    while (next !== null) {
        arr.push(next);
        next = next.next;
    }

    [arr[k - 1].val, arr[arr.length - k].val] = [arr[arr.length - k].val, arr[k - 1].val];

    return head;
};
