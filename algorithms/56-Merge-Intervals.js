// 56. Merge Intervals [Medium]
// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let [start, end] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];

        if (currentStart > end) {
            result.push([start, end]);
            start = currentStart;
        }

        end = Math.max(end, currentEnd);
    }

    result.push([start, end]);
    return result;
};
