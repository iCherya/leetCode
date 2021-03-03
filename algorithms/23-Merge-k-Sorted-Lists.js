/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    const nums = [];

    for (let node of lists) {
        while (node) {
            nums.push(node.val);
            node = node.next;
        }
    }

    if (nums.length === 0) return null;

    nums.sort((a, b) => a - b);

    const newNode = new ListNode(nums[0]);

    let current = newNode;

    for (let i = 1; i < nums.length; i++) {
        current.next = new ListNode(nums[i]);
        current = current.next;
    }

    return newNode;
};
