/**
 * Simulates the operation of a stack-like data structure.
 */
class FreqStack {
    constructor() {
        this.freqMap = {};
        this.setMap = {};
        this.maxFreq = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (!this.freqMap[x]) this.freqMap[x] = 0;

        const freq = this.freqMap[x] + 1;

        this.freqMap[x] = freq;

        if (freq > this.maxFreq) this.maxFreq = freq;

        if (!this.setMap[freq]) this.setMap[freq] = [];

        this.setMap[freq].push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.maxFreq === 0) return null;

        const top = this.setMap[this.maxFreq].pop();
        this.freqMap[top] -= 1;

        if (this.setMap[this.maxFreq].length === 0) this.maxFreq -= 1;

        return top;
    }
}
