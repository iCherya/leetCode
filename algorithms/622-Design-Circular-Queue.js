/**
 * @param {number} k
 */
class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.items = Array(k).fill(null);
        this.head = 0;
        this.tail = 0;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;

        this.items[this.tail] = value;
        this.tail = (this.tail + 1) % this.capacity;

        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) return false;

        this.items[this.head] = null;
        this.head = (this.head + 1) % this.capacity;

        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.isEmpty()) return -1;

        return this.items[this.head];
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.isEmpty()) return -1;

        const rear = (this.tail + this.capacity - 1) % this.capacity;

        return this.items[rear];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head === this.tail && this.items[this.head] === null;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.head === this.tail && this.items[this.head] !== null;
    }
}
