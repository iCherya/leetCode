/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
const maxPerformance = function (n, speeds, efficiencies, k) {
    const workers = new Array(n);
    for (let i = 0; i < n; i++) {
        workers[i] = { speed: BigInt(speeds[i]), efficiency: efficiencies[i] };
    }
    workers.sort((a, b) => b.efficiency - a.efficiency);

    let totalSpeed = BigInt(0);
    let max = BigInt(0);
    const heap = new MinHeap();

    for (const worker of workers) {
        const { speed, efficiency } = worker;
        totalSpeed += speed;
        heap.push(worker);

        if (heap.size > k) {
            const last = heap.pop();
            totalSpeed -= last.speed;
        }

        const total = totalSpeed * BigInt(efficiency);
        if (total > max) max = total;
    }

    return max % BigInt(1000000007);
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp(this.size - 1);
    }

    pop() {
        if (this.size < 2) {
            return this.heap.pop();
        }

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return result;
    }

    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1, 2].map((n) => parent * 2 + n).filter((n) => n < this.size);

            if (this.shouldSwap(child2, child)) {
                child = child2;
            }

            if (this.shouldSwap(child, parent)) {
                [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
                parent = child;
            } else {
                return parent;
            }
        }
    }

    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);

            if (this.shouldSwap(child, parent)) {
                [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
                child = parent;
            } else {
                return child;
            }
        }
    }

    shouldSwap(child, parent) {
        return child && this.heap[child].speed < this.heap[parent].speed;
    }
}
