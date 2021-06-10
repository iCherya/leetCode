class MyCalendar {
    constructor() {
        this.intervals = [];
    }

    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        for (const interval of this.intervals) {
            if (end <= interval.start) continue;
            if (start < interval.end) return false;
        }

        this.intervals.push({ start, end });
        this.intervals.sort((a, b) => a.start - b.start);
        return true;
    }
}
