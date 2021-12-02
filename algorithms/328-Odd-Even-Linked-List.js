// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}s
 */
const oddEvenList = (head) => {
  if (!head) return null;

  let odd = head;
  let even = head.next;
  const evenStarts = head.next;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenStarts;
  return head;
};
