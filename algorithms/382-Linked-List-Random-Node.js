// 382. Linked List Random Node [Medium]
// https://leetcode.com/problems/linked-list-random-node/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   */
  constructor(head) {
    this.nodes = [];
    while (head) {
      this.nodes.push(head);
      // eslint-disable-next-line no-param-reassign
      head = head.next;
    }
  }

  /**
   * @return {number}
   */
  getRandom() {
    const index = Math.floor(Math.random() * this.nodes.length);
    return this.nodes[index].val;
  }
}
