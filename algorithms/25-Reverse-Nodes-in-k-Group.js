// 25. Reverse Nodes in k-Group [Hard]
// https://leetcode.com/problems/reverse-nodes-in-k-group/

/* eslint-disable no-undef */
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
const reverseKGroup = (head, k) => {
    if (k === 1) return head;

    const arr = createArrayFromListNode(head);
    let res = [];

    for (let i = 0; i < arr.length; i += k) {
        const temp = arr.slice(i, i + k);

        if (temp.length === k) res = [...res, ...temp.reverse()];
        else res = [...res, ...temp];
    }

    return createListNodeFromArray(res);
};

function createArrayFromListNode(node) {
    const arr = [];
    let current = node;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    return arr;
}

function createListNodeFromArray(arr) {
    let temp = null;
    let node = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        if (!node) {
            node = new ListNode(num);
        } else {
            temp = new ListNode(arr[i]);
            temp.next = node;
            node = temp;
        }
    }

    return node;
}
