/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    if (!l1 && !l2) return null;
    else if (!l1) return l2;
    else if (!l2) return l1;

    const result = [];

    let current = l1;
    while (current) {
        result.push(current);
        current = current.next;
    }

    current = l2;
    while (current) {
        result.push(current);
        current = current.next;
    }

    result.sort((a, b) => a.val - b.val);

    for (let i = 0; i < result.length; i++) {
        result[i].next = i != result.length - 1 ? result[i + 1] : null;
    }

    return result[0];
};

const mergeTwoLists2 = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
