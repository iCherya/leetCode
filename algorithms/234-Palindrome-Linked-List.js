/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    const arr = [];

    let currentNode = head || null;
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }

    for (let i = 0; i < arr.length; i += 1) {
        const left = arr[i];
        const right = arr[arr.length - 1 - i];

        if (left !== right) return false;
    }

    return true;
};
