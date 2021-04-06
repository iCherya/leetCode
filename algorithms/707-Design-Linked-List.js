// eslint-disable-next-line no-redeclare
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor(head) {
        this.head = head;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.size || index < 0) return -1;

        let idx = 0;
        let current = this.head;

        while (current) {
            if (idx === index) return current.val;

            current = current.next;
            idx++;
        }
    }

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new Node(val);

        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }

        this.size++;
    }

    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new Node(val);

        if (this.tail) this.tail.next = node;
        else this.head = node;

        this.tail = node;
        this.size++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;

        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        let idx = 0;
        let current = this.head;

        while (current) {
            if (idx === index - 1) {
                const node = new Node(val);

                node.next = current.next;
                current.next = node;

                this.size++;
                return;
            }

            current = current.next;
            idx++;
        }
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index >= this.size || index < 0) return;

        if (index === 0) {
            this.head = this.head.next;
            this.size--;

            if (this.size === 0) this.tail = null;
            return;
        }

        let idx = 0;
        let current = this.head;

        while (current) {
            if (idx === index - 1) {
                current.next = current.next.next ? current.next.next : null;

                if (!current.next) {
                    this.tail = current;
                }

                this.size--;
                return;
            }

            current = current.next;
            idx++;
        }
    }
}
