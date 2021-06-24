/* eslint-disable no-undef */
// 92. Reverse Linked List II [Medium]
// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    const swapValues = (node1, node2) => ([node1.val, node2.val] = [node2.val, node1.val]);
    const swapCandidates = [];
    let currentNode = head;

    for (let i = 1; i <= right; i++) {
        if (i >= left) swapCandidates.push(currentNode);
        currentNode = currentNode.next;
    }

    const middleIdx = Math.floor(swapCandidates.length / 2);

    for (let i = 0; i < middleIdx; i++) {
        swapValues(swapCandidates[i], swapCandidates[swapCandidates.length - 1 - i]);
    }

    return head;
};
