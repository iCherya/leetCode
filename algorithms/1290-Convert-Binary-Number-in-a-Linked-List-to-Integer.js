// 1290. Convert Binary Number in a Linked List to Integer [Easy]
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
    let binary = '';

    while (head) {
        binary += head.val;
        head = head.next;
    }

    return parseInt(binary, 2);
};
