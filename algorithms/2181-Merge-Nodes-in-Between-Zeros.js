// 2181. Merge Nodes in Between Zeros [Medium]
// https://leetcode.com/problems/merge-nodes-in-between-zeros/

/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
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
const mergeNodes = (head) => {
  const result = new ListNode();
  let temp = result;

  while (head !== null) {
    if (head.val === 0 && head.next) {
      temp.next = new ListNode(0);
      temp = temp.next;
    }

    temp.val += head.val;
    head = head.next;
  }

  return result.next;
};
