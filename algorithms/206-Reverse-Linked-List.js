// 206. Reverse Linked List [Easy]
// https://leetcode.com/problems/reverse-linked-list/

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
const reverseList = (head) => {
    let prev = null;

    while (head) {
        [head.next, prev, head] = [prev, head, head.next];
    }

    return prev;
};
